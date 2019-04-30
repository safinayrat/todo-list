import React from "react";
import { compose } from "@bem-react/core";
import { cn } from "@bem-react/classname";
import { DoneTheme } from "./_theme/done";
import { ImportantTheme } from "./_theme/important";
import Button from "../Button/Button";

import "./TodoItem.css";
export const cnTodoItem = cn("TodoItem");

const todoItem = ({
  label,
  done,
  important,
  onToggleImportant,
  onToggleDone,
  onDeleted
}) => {
  return (
    <React.Fragment>
      <span
        onClick={onToggleDone}
        className={cnTodoItem("Item", { done, important })}
      >
        {label}
      </span>
      <Button className={cnTodoItem("Item")} onClick={onDeleted}>
        delete
      </Button>
      <Button className={cnTodoItem("Item")} onClick={onToggleImportant}>
        important
      </Button>
    </React.Fragment>
  );
};

const TodoItem = compose(
  DoneTheme,
  ImportantTheme
)(todoItem);

export default TodoItem;
