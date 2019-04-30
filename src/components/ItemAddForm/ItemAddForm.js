import React from "react";
import { cn } from "@bem-react/classname";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./ItemAddForm.css";

export default class ItemAddForm extends React.Component {
  state = { label: "" };
  onLabelChange = e => {
    this.setState({ label: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    const { label } = this.state;
    const cnItemAddForm = cn("ItemAddForm");
    return (
      <form
        onSubmit={this.onSubmit}
        className={cnItemAddForm(null, [this.props.className])}
      >
        <Input
          className={cnItemAddForm("Input")}
          type="text"
          placeholder="add"
          onChange={this.onLabelChange}
          onSubmit={this.onSubmit}
          value={label}
        />
        <Button className={cnItemAddForm("Button")}>Add Item</Button>
      </form>
    );
  }
}
