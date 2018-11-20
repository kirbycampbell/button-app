import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="col-1">
        <button
          onClick={() => this.props.onIncrement()}
          className={this.props.classAssign()}
        >
          Press Me
        </button>
      </div>
    );
  }
}

export default Button;
