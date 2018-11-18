import React, { Component } from "react";
import Button from "./button";

class Buttons extends Component {
  render() {
    const { onIncrement } = this.props;

    return (
      <div>
        {buttons.map(button => (
          <Button key={button.id} onIncrement={onIncrement} button={button} />
        ))}
      </div>
    );
  }
}

export default Buttons;
