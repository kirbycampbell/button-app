import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="col-1">
        <button
          onClick={() => this.props.onIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Press Me
        </button>
      </div>
    );
  }
}

export default Button;
