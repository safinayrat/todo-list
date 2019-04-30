import React from "react";
import "./Header.css";
import { cn } from "@bem-react/classname";

const cnHeader = cn("Header");

const Header = props => {
  return <h1 className={cnHeader(null, [props.className])}>App Header</h1>;
};

export default Header;
