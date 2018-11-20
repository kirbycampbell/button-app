import React, { Component } from "react";
import "./App.css";
import Buttons from "./components/buttons";

class App extends Component {
  state = {
    val: 0
  };

  constructor(props) {
    super(props);
  }

  handleIncrement = props => {
    const value = this.state;
    value.val++;
    this.setState({ value });
    //console.log(value.val);
  };

  classAssign = props => {
    let classes = "btn btn-secondary btn-sm ";
    if (this.state.val / 1 === 1) {
      classes += "badge-primary";
    } else if (this.state.val / 2 === 1) {
      classes += "badge-success";
    } else if (this.state.val / 3 === 1) {
      classes += "badge-danger";
    } else if (this.state.val / 4 === 1) {
      classes += "badge-warning";
    }
    console.log(this.state.val);
    return classes;
  };

  render() {
    return (
      <div className="container">
        <Buttons
          onIncrement={this.handleIncrement}
          classAssign={this.classAssign}
        />
      </div>
    );
  }
}

export default App;
