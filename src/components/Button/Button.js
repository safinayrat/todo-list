import React from "react";
import "./Button.css";
import { cn } from "@bem-react/classname";

const cnButton = cn("Button");
const Button = props => {
  return (
    <button
      onClick={props.onClick}
      className={cnButton(
        {
          theme: props.theme,
          action: props.action,
          hovered: props.hovered
        },
        [props.className]
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
