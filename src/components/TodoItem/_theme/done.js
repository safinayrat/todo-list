import { withBemMod } from "@bem-react/core";
import { cnTodoItem } from "../TodoItem";
import "./done.css";

export const DoneTheme = withBemMod(cnTodoItem, { done: true });
