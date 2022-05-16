import React, { Component } from "react";
import "./App.css";
import Child from "./child";
class App extends Component {
  state = {
    name: "peter",
  };

  constructor() {
    super();
    this.state = {
      name: "john",
    };
    console.log("constructor");
  }

  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth });
    }
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentWillMount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponetnUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log("ComponentWillUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentWillUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  changeState() {
    this.setState({ name: "jill" });
  }

  unmountChild() {
    this.setState({ name: "robert" });
  }

  render() {
    console.log("render");
    if (this.state.name === "robert") {
      return <div />;
    }
    return (
      <div className="App">
        {this.state.name}
        innerWidth:{this.state.innerWidth}
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    );
  }
}

export default App;
