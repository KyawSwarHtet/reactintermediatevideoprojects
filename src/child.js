import React, { Component } from "react";
import "./App.css";
class Child extends Component {
  constructor() {
    super();

    console.log("child constructor");
  }

  componentWillMount() {
    console.log("child componentWillMount");
  }

  componentDidMount() {
    console.log("child componentWillMount");
  }

  componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponetnUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("child ComponentWillUpdate");
  }
  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("child prevProps", prevProps);
    console.log("child prevState", prevState);
    console.log("child componentDidUpdate");
  }

  render() {
    console.log("child render");
    return <div className="App">child name:{this.props.name}</div>;
  }
}

export default Child;
