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
  handleIncrement = value => {
    value++;
    console.log({ value });
  };

  render() {
    const something = 0;
    return (
      <div className="container">
        <Buttons onIncrement={this.handleIncrement(something)} />
      </div>
    );
  }
}

export default App;
