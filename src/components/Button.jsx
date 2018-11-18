import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="col-1">
        <button
          onClick={() => this.props.onIncrement(this.props.val)}
          className={this.getButtonColor()}
        >
          Press Me
        </button>
      </div>
    );
  }

  getButtonColor() {
    let classes = "btn btn-secondary btn-sm ";
    console.log(this.props.val);
    if (this.props.val / 1 === 1) classes += "badge-primary";
    return classes;
  }
}

export default Button;
