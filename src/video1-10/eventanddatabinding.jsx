import React, { Component } from "react";

export default class Eventanddatabinding extends Component {
  state = {
    name: "kyaw kyaw zaw",
  };

  changeName = (newName) => {
    this.setState({
      //   name: "hla hala",
      name: newName,
    });
  };

  changeNameFromInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <br></br>
        <button onClick={() => this.changeName("aung kyaw")}>
          change name
        </button>
        <button onClick={this.changeName.bind(this, "binding ksh")}>
          binding change name
        </button>
        <br />
        <input
          type="text"
          onChange={this.changeNameFromInput}
          value={this.state.name}
        />
        <br />
        <div>{this.state.name}</div>
      </div>
    );
  }
}
