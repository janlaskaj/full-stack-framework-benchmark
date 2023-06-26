# Full-stack frameworks benchmark

## Introduction to the methodology

In rapidly evolving world of web applications, choosing the right full-stack framework is crucial for the success of a project. With numerous options available to choose from, it is necessary to correctly evaluate frameworks. This methodology provides a comprehensive guide for such evaluation of full-stack frameworks, helping developers assess and determine the most suitable framework for their project. By considering social and technical aspects, it provides a structured approach to evaluating key features, facilitating an efficient framework selection process. This repository includes the results of all previous measurements, serving as a database for comparisons without the need to create new ones.

The methodology presents a standardized and structured procedure for evaluation of full-stack frameworks. It describes how to identify, analyze, and compare social metrics, functionalities, and technical metrics. By enabling informed decision-making, the methodology saves time and effort in assessing the suitability of frameworks. For each framework being compared, a simple "Todo" application for task tracking is developed. In addition to all the classic functionalities (inspired by the TodoMVC project), it can render a page with a large number of tasks, which is used for measuring rendering performance. The application is created by the author of each single comparison, who should be sufficiently familiar with the framework.

## Compared Metrics

### Social Metrics

A large and active community is crucial for any framework. It signifies the presence of experienced developers who are proficient in working with the technology and are aware of its strengths and weaknesses. Within the community, these developers contribute with a multitude of tools, guides, publications, and best practices. Furthermore, a thriving community indicates ongoing development, innovation, and long-term support for the technology. An active framework brings regular updates that ensure security and the introduction of new features.

| Description                           | Unit                   | Scale                                                                                                                | Data Source                                                                                                          |
| ------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Number of GitHub stars                | Number of stars        | 0 - unlimited                                                                                                        | Framework's GitHub page                                                                                              |
| Average number of downloads per week  | Number of downloads    | 0 - unlimited                                                                                                        | Package manager (npm, composer, etc.)                                                                                |
| Number of publications on Amazon.com  | Number of publications | 0 - unlimited                                                                                                        | Advanced book search on amazon.com (keyword = framework name, language = English, category = Computers & Technology) |
| Frequency of major updates            | Update frequency       | daily - weekly - monthly - quarterly - biannually - annually - irregular (approximately how often) - initial version | Framework documentation (version history)                                                                            |
| Frequency of minor (security) updates | Update frequency       | daily - weekly - monthly - quarterly - biannually - annually - irregular (approximately how often) - initial version | Framework documentation (version history)                                                                            |
| Localization of documentation         | Number of languages    | 0 - unlimited                                                                                                        | Framework documentation                                                                                              |
| Licensing costs for the framework     | Currency               | Free - unlimited                                                                                                     | Framework documentation                                                                                              |
| Corporation support                   |                        | Yes (name) / No                                                                                                      | Framework documentation                                                                                              |
| Framework stability, Maturity         | Framework version      | Alpha / Beta / Stable etc.                                                                                           | Framework documentation                                                                                              |
| License                               | License name           | MIT, GNU, APACHE, etc.                                                                                               | Framework documentation                                                                                              |

### Functionalities

Evaluation and comparison of features among full-stack frameworks are crucial for determining their suitability for various projects. By thoroughly examining and comparing these features, developers can identify the framework that best aligns with their requirements and project goals. The presence of individual features is determined through studying the documentation of each framework.

| Functionality                                   | Scale                                                                                                |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Server-side rendering (SSR)                     | Yes - No                                                                                             |
| Client-side rendering (CSR)                     | Yes - No                                                                                             |
| Streamed SSR                                    | Yes - No                                                                                             |
| Static page generation                          | Yes - No                                                                                             |
| EDGE environment support                        | Yes - No                                                                                             |
| SERVERLESS environment support                  | Supported environments (Netlify, Vercel, AWS, etc.)                                                  |
| Custom server support                           | Yes (server type, e.g., Node.js) - No                                                                |
| Built-in CSS support                            | CSS modules, Tailwind, Sass, CSS-in-JS etc.                                                          |
| Server-side data fetching                       | Yes - No                                                                                             |
| Built-in REST API                               | Yes - No                                                                                             |
| Data caching                                    | Yes (for requests) - Yes (for pages) - No                                                            |
| Request routing                                 | Yes (file-based) - Yes (code-based) - No                                                             |
| Code splitting for pages                        | Yes - No                                                                                             |
| Element optimization                            | Images, Fonts, Static assets, Lazy Loading, Metadata, JavaScript scripts, etc.                       |
| Preconfigured tools                             | TypeScript, ESLint, Prettier, Environment variables (ENV), Markdown, Absolute module importing, etc. |
| Development server with HMR (Hot Module Reload) | Yes - No                                                                                             |
| Custom CLI                                      | Yes - No                                                                                             |

### Technical metrics

Technical metrics play a crucial role in measuring and objectively comparing the performance, scalability, and maintainability of (not only) full-stack frameworks. By utilizing these metrics, informed decisions can be made regarding the selection and optimality of frameworks, ultimately leading to the development of high-quality, efficient, and scalable web applications. All metric measurements are performed through a reference application described in this methodology.

| Description                                                                      | Unit                 | Scale         | Data Source               |
| -------------------------------------------------------------------------------- | -------------------- | ------------- | ------------------------- |
| First Contentful Paint (FCP): time until the first content is displayed to users | Seconds              | 0 - unlimited | Measurement on sample app |
| Largest Contentful Paint (LCP): time when the largest text or image is displayed | Seconds              | 0 - unlimited | Measurement on sample app |
| Time to Interactive (TTI): time until the page becomes interactive               | Seconds              | 0 - unlimited | Measurement on sample app |
| Total Blocking Time (TBT): sum of time intervals between FCP and TTI             | Seconds              | 0 - unlimited | Measurement on sample app |
| Cumulative Layout Shift (CLS): pohyb viditelných prvků v rámci stránky           | CLS score            | 0 - 1         | Measurement on sample app |
| SEO: search engine optimalization                                                | SEO score            | 0 - 100       | Measurement on sample app |
| Best Practices                                                                   | Best Practices score | 0 - 100       | Measurement on sample app |

# Comparison Results

Sections below contain finished measurements.

## Social Metrics

| Description                          | Next.js      | SvelteKit       | Solid Start                    |
| ------------------------------------ | ------------ | --------------- | ------------------------------ |
| Number of GitHub stars               | 108.000      | 15.200          | 3.600                          |
| Average weekly downloads             | 4.400.000    | 201.000         | 4.650                          |
| Number of publications on Amazon.com | 89           | 3               | 0                              |
| Frequency of major updates           | Yearly       | Initial version | Initial version                |
| Frequency of minor updates           | Weekly       | Weekly          | Irregular ( monthly / weekly ) |
| Documentation localization           | 1            | 1               | 1                              |
| Framework licensing costs            | Free         | Free            | Free                           |
| Corporation support                  | Yes (Vercel) | No              | No                             |
| Framework stability, Maturity        | Stable       | Stable          | Beta                           |
| License                              | MIT          | MIT             | MIT                            |

## Funkcionality

|                                                 | Next.js                                                                                         | SvelteKit                                                                            | Solid Start                                                          |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| Server-side rendering (SSR)                     | Yes                                                                                             | Yes                                                                                  | Yes                                                                  |
| Client-side rendering (CSR)                     | Yes                                                                                             | Yes                                                                                  | Yes                                                                  |
| Streamed SSR                                    | Yes                                                                                             | No                                                                                   | Yes                                                                  |
| Static site generation                          | Yes                                                                                             | Yes                                                                                  | Yes                                                                  |
| EDGE environment support                        | Yes                                                                                             | Yes                                                                                  | Yes                                                                  |
| SERVERLESS environment support                  | Vercel; AWS Amplify; Azure Static Web Apps; Cloudflare Pages; Firebase; Netlify; Terraform; SST | Vercel; Cloudflare Pages / Workers; Netlify; Azure Static Web Apps; SST              | Vercel; Netlify; AWS Lambda; Cloudflare Workers / Pages; Deno Deploy |
| Custom server support                           | Yes                                                                                             | Yes                                                                                  | Yes                                                                  |
| Built-in CSS support                            | CSS Modules, Tailwind, Sass, CSS-in-JS                                                          | none                                                                                 | CSS Modules, Sass                                                    |
| Server-side data fetching                       | Yes                                                                                             | Yes                                                                                  | Yes                                                                  |
| Built-in REST API                               | Yes                                                                                             | Yes                                                                                  | Yes                                                                  |
| Data caching                                    | Yes                                                                                             | Yes                                                                                  | Yes                                                                  |
| Request routing                                 | Yes (file-based)                                                                                | Yes (file-based)                                                                     | Yes (file-based)                                                     |
| Code splitting for pages                        | Yes                                                                                             | Yes                                                                                  | Yes                                                                  |
| Element optimization                            | Images, Fonts, Static assets, Lazy Loading, Metadata, JavaScript scripts                        | Images, Static assets, Lazy Loading, Metadata, JavaScript scripts                    | Static assets, Lazy Loading, Metadata, JavaScript scripts            |
| Preconfigured tools                             | TypeScript, ESLint, Prettier, Environment variables (ENV), Markdown, Absolute module importing  | TypeScript, ESLint, Prettier, Environment variables (ENV), Absolute module importing | TypeScript, Environment variables (ENV), Absolute module importing   |
| Development server with HMR (Hot Module Reload) | Yes                                                                                             | Yes                                                                                  | Yes                                                                  |
| Custom CLI                                      | Yes                                                                                             | No                                                                                   | No                                                                   |

## Technical Metrics

Measurement Details:

- Date: 27th June 2023;
- System: Ryzen 5 1600, 16GB RAM 2666Mhz.

| Framework   | First Contentful Paint                    | Largest Contentful Paint                  | Time to Interactive                       | Total Blocking Time                         | Cumulative Layout Shift       |
| ----------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ------------------------------------------- | ----------------------------- |
| Next.js     | 100: 0.8 s<br>1000: 0.8 s<br>10000: 1.0 s | 100: 2.0 s<br>1000: 1.7 s<br>10000: 1.7 s | 100: 1.2 s<br>1000: 1.3 s<br>10000: 3.0 s | 100: 0 ms<br>1000: 10 ms<br>10000: 1,400 ms | 100: 0<br>1000: 0<br>10000: 0 |
| SvelteKit   | 100: 2.1 s<br>1000: 2.3 s<br>10000: 6.0 s | 100: 2.1 s<br>1000: 2.4 s<br>10000: 6.0 s | 100: 2.1 s<br>1000: 2.3 s<br>10000: 7.7 s | 100: 0 ms<br>1000: 60 ms<br>10000: 1,440 ms | 100: 0<br>1000: 0<br>10000: 0 |
| Solid Start | 100: 1.2 s<br>1000: 1.1 s<br>10000: 1.4 s | 100: 1.4 s<br>1000: 1.3 s<br>10000: 1.6 s | 100: 1.2 s<br>1000: 1.3 s<br>10000: 3.3 s | 100: 0 ms<br>1000: 20 ms<br>10000: 1,470 ms | 100: 0<br>1000: 0<br>10000: 0 |

# Creation and Recording of Comparison

Creating a comparison involves two main parts: recording social metrics and functionality in the `README.md` file (this file), and creating a sample Todo application. The performance measurement (technical metrics) using sample application will be performed by the repository maintainer, but the measurement can also be conducted locally to test that the mesurement is working as intended.

## Prerequisites

To perform the comparison, the following conditions must be met:

- Installed Node.js (the benchmark has been tested on version 18).
- Google Chrome.

Only a full-stack framework that can be used to develop a sample application can be added to the comparison. The framework must be active and at least in beta state. If the newly added framework has its own prerequisites, they need to be added to the above list.

## Cloning the Repository

To download and install dependencies, you need to clone the repository, install the dependencies, and create your own feature branch. Replace framework with the name of the framework.

```
git clone git@github.com:janlaskaj/full-stack-framework-benchmark.git
cd benchmark
npm install
git checkout -b feature/framework
```

To run the benchmark, use the following command. The result will be saved in the benchmark-result.md file.

```
npm run benchmark
```

## Recording of Social Metrics and Functionalities

In the `readme.md` file, you need to add tables presenting the social metrics and functionalities with values for the framework being compared. The comparison should be included in the tables alphabetically. The data source for each metric is available in the `Compared Metrics` section. The table for technical metrics will be filled in by the repository maintainer.

## Sample Todo Application

Todo is a simple application that allows users to manage their tasks. It includes a single input field for adding new tasks and a button to save the entered task. Each task can be marked as completed or incomplete. The goal of the application is to mimic real-world behavior within a synthetic benchmark, enabling performance measurement that more closely resembles actual scenarios. Real-world behavior is simulated by generating a large number of tasks on the server during performance measurement.

### User Interface

The user interface (UI) of the application should consist of the following components:

- Input Field: A text input field where the user can enter their task;
- Submit Button: A button that saves the task;
- Task List: A list that displays the existing tasks.
- DOM elements Structure:

```
<main>
    <form>
        <input type="text" name="name">
        <button type="submit">Create</button>
    </form>
    <ul>
      <li>
          <input id="1" type="checkbox" checked="">
          <label for="1">Todo 1</label>
      </li>
      .....
      <li>
          <input id="99" type="checkbox">
          <label for="99">Todo 99</label>
      </li>
    </ul>
</main>
```

### Basic Functionality

- Entering task names;
- Saving tasks;
- Displaying saved tasks in a list;
- Marking tasks as completed/incomplete;
- Updating the list when the task status changes;
- Filtering tasks based on their status.

Completed tasks should be visually distinguished from incomplete tasks in the list.

### Technical Details

- The application should be developed using established best practices.
- Server-side rendering is required.
- The application should accept a URL parameter `todoBenchmark`, based on which a pre-generated number of tasks will be displayed on the page.
- The application should be accessible via the `/` route.
- The application should run on port `3000`.
- The `starting-materials` directory contains starter JSON and CSS files.
- A JSON file in the root of the application is used as the database for task details.
- Reading the `JSON` file should be artificially delayed by 200ms.
- To maintain a consistent appearance, use the provided CSS file. To ensure that the CSS rules function correctly, adhere to the above UI structure.

### Creating a New Todo Applicatione

To create a new todo application, use the following command. Replace the `framework` keyword with the name of the framework in both commands, optionally including the version or any other identifier.

```
cp -r starting-materials frameworks/framework
cd frameworks/framework
```

After that, you can create a project in the newly created folder following the instructions provided by the framework. In the project, you should be able to install dependencies using `npm install` and build the production version of the application using the command `npm run build`. The production build should be started by `npm run start` command. Then, the creation of a sample application follows in the newly created folder.

## Measurement of Technical metrics

After development od Sample Todo Application is finished, Technical metrics can be measured using an automated script. It can be executed with a single command: `npm run benchmark`. The script installs dependencies for all applications, builds the production version of the application, and then sequentially launches and tests each one. The results are ultimately recorded in the lighthouse-report.md file. The specific steps performed by the script are as follows:

- For all applications, dependencies are installed first, followed by the production version being built.
- Subsequently, individual measurements are performed. They are executed sequentially, with one measurement for each framework and a pre-defined number of ToDo tasks (e.g., 100, 1,000, and 10,000 tasks).
- For each measurement, the production version of the application on which the measurement is performed is first launched. The measurement takes place in the automatically launched Google Chrome browser, where metrics are measured using the official Lighthouse package.
- A row is generated in the table for each framework.
- At the end of the script, a markdown-formatted table is generated and saved in the lighthouse-report.md file.
- A completion message is displayed in the console, and the script is terminated.
- If an error occurs during the measurement, the process is interrupted, and the error is displayed in the console.

## Create a pull request

After creating the sample application and including the metrics for comparison, the only remaining step is to open a pull request for integration. If both the comparison and sample application meet the requirements, you can publish the branch to the repository using the command below. Replace the placeholder `framework` with the name of the framework.

```
git push --set-upstream origin framework
```

After pushing the branch, it is necessary to open a pull request through the GitHub web interface. If all conditions are met, the pull request will be merged. In case of significant non-compliance with the conditions, it will be rejected, and if modifications are needed, the requester will be prompted to make the necessary changes.

# Error correction, updating existing comparisons

For error correction and updating comparisons, the same instructions as for creating a pull request for integration apply. However, instead of creating a new comparison and filling in all the metrics, you only need to make the necessary changes according to the author's modifications. After making the changes, you can publish them in the same way through a pull request.

---

[![CC BY 4.0][cc-by-shield]][cc-by]

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
