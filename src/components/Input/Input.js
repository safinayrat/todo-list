import React from "react";
import { cn } from "@bem-react/classname";
import "./Input.css";

const cnInput = cn("Input");

const Input = props => {
  return (
    <input
      className={cnInput(null, [props.className])}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
