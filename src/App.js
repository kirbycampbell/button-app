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

  handleIncrement = () => {
    const value = this.state;
    value.val++;
    this.setState({ value });
    console.log(value);
  };

  render() {
    return (
      <div className="container">
        <Buttons onIncrement={this.handleIncrement} />
      </div>
    );
  }
}

export default App;
