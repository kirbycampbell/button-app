import React, { Component } from "react";
import Button from "./button";

class Buttons extends Component {
  render() {
    const { onIncrement, classAssign } = this.props;

    return (
      <div>
        <Button onIncrement={onIncrement} classAssign={classAssign} />
      </div>
    );
  }
}

export default Buttons;
