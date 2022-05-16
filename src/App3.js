import React, { Component, PureComponent } from "react";
import "./App.css";

const Temp = (props) => {
  return <div>{props.val}</div>;
};
export default class App extends PureComponent {
  state = {
    val: 1,
  };

  componentDidMount() {
    console.log("render Temp");
    setInterval(() => {
      this.setState(() => {
        return { val: 1 };
      });
    }, 2000);
  }

  //   shouldComponentUpdate(nextProp, nextState) {
  //     console.log("nextState", nextState);
  //     console.log("thisState", this.state);
  //     return this.state.val === nextState.val ? false : true;
  //   }

  render() {
    console.log("render app");
    return (
      <div className="App">
        <Temp val={this.state.val} />
      </div>
    );
  }
}
