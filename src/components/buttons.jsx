import React, { Component } from "react";
import Button from "./button";

class Buttons extends Component {
  render() {
    const { onIncrement } = this.props;

    return (
      <div>
        <Button onIncrement={onIncrement} />
      </div>
    );
  }
}

export default Buttons;
