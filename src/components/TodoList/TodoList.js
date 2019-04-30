import React from "react";
import TodoItem, { cnTodoItem } from "../TodoItem/TodoItem";
import { cn } from "@bem-react/classname";
import "./TodoList.css";
import "../TodoItem/TodoItem.css";

const cnTodoList = cn("TodoList");

const TodoList = ({
  todos,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  className
}) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className={cnTodoItem()}>
        <TodoItem
          {...itemProps}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onDeleted={() => onDeleted(id)}
        />
      </li>
    );
  });
  return <ul className={cnTodoList(null, [className])}>{elements}</ul>;
};

export default TodoList;
