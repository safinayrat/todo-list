import { withBemMod } from "@bem-react/core";
import { cnTodoItem } from "../TodoItem";
import "./important.css";

export const ImportantTheme = withBemMod(cnTodoItem, { important: true });
