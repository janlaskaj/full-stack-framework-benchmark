import fs from "fs";
import path from "node:path";
import { fileURLToPath } from "url";
import lighthouse from "lighthouse";
import chromeLauncher from "chrome-launcher";
import concurrently from "concurrently";
import { markdownTable } from "markdown-table";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of URLs to measure
const measuredSites = [
  {
    displayName: "Next.js",
    folderName: "next-app",
  },
  {
    displayName: "SvelteKit",
    folderName: "svelte-app",
  },
  {
    displayName: "Solid Start",
    folderName: "solid-app",
  },
];

// Count of Todo's generated
const measuredCounts = [100, 1000, 10000];

const buildApps = async () => {
  const { result: installResult } = concurrently(
    measuredSites.map((measuredSite) => ({
      command: "npm install",
      cwd: path.resolve(__dirname, "frameworks", measuredSite.folderName),
    }))
  );

  await installResult;

  const { result: buildResult } = concurrently(
    measuredSites.map((measuredSite) => ({
      command: "npm run build",
      cwd: path.resolve(__dirname, "frameworks", measuredSite.folderName),
    }))
  );

  return buildResult;
};

const runServer = (folderName) => {
  const { commands, result } = concurrently([
    {
      command: "npm run start",
      cwd: path.resolve(__dirname, "frameworks", folderName),
      raw: true,
    },
  ]);

  result.catch((e) => undefined);

  return () => commands.forEach((command) => command.kill("SIGTERM"));
};

(async () => {
  try {
    await buildApps();

    // Launch Chrome headless
    const chrome = await chromeLauncher.launch();
    const options = {
      port: chrome.port,
    };

    const tableData = [];

    for (const measuredSite of measuredSites) {
      const kill = runServer(measuredSite.folderName);
      const auditResults = {
        "first-contentful-paint": {},
        "largest-contentful-paint": {},
        interactive: {},
        "total-blocking-time": {},
        "cumulative-layout-shift": {},
      };

      for (const measuredCount of measuredCounts) {
        // Run Lighthouse audit for the current site and count
        const runnerResult = await lighthouse(
          "http://localhost:3000/?todoBenchmark=" + measuredCount.toString(),
          options,
          {
            extends: "lighthouse:default",
            settings: {
              onlyCategories: ["performance"],
            },
          }
        );

        // Extract relevant audit results
        for (const key in runnerResult.lhr.audits) {
          if (auditResults.hasOwnProperty(key)) {
            auditResults[key][measuredCount] = runnerResult.lhr.audits[key];
          }
        }
      }

      // Create a row of data for the current site
      const rowData = Object.keys(auditResults).map((key) =>
        measuredCounts
          .map((count) => `${count}: ${auditResults[key][count].displayValue}`)
          .join("<br>")
      );

      // Add the row data to the table data array
      tableData.push([measuredSite.displayName, ...rowData]);
      kill();
    }

    // Generate the Markdown table content using the table data
    const markdownTableContent = markdownTable([
      [
        "URL",
        "First Contentful Paint",
        "Largest Contentful Paint",
        "Time to Interactive",
        "Total Blocking Time",
        "Cumulative Layout Shift",
      ],
      ...tableData,
    ]);

    // Save the Markdown table to a file
    fs.writeFileSync("lighthouse-report.md", markdownTableContent);

    // Close the Chrome instance
    await chrome.kill();

    console.log("Lighthouse measurement and report generation complete!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
