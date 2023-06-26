import { FC, useTransition } from "react";
import { Input } from "./Input";
import { Todo } from "./actions";

type Props = Todo;

export const TodoItem: FC<Props> = ({ id, name, completed }) => {
  return (
    <li>
      <Input id={id} completed={completed} />
      <label htmlFor={id}>{name}</label>
    </li>
  );
};
