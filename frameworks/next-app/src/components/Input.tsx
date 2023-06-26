"use client";

import { FC, useTransition } from "react";

import { toggleTodo } from "./actions";

type Props = {
  id: string;
  completed: boolean;
};

export const Input: FC<Props> = ({ id, completed }) => {
  let [isPending, startTransition] = useTransition();

  return (
    <input
      id={id}
      type="checkbox"
      disabled={isPending}
      defaultChecked={completed}
      onChange={() => startTransition(() => toggleTodo(id))}
    />
  );
};
