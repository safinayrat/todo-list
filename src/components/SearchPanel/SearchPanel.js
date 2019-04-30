import React from "react";
import { cn } from "@bem-react/classname";
import Input from "../Input/Input";
import "./SearchPanel.css";

export default class SearchPanel extends React.Component {
  state = { term: "" };
  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onChangeLabel(term);
  };
  render() {
    const cnSearchPanel = cn("SearchPanel");
    return (
      <Input
        className={cnSearchPanel(null, [this.props.className])}
        value={this.state.term}
        placeholder="search"
        onChange={this.onSearchChange}
      />
    );
  }
}
