import React, { Component } from "react";
import "./App.css";

export default class ReactRefAndDOM extends Component {
  onClick = () => {
    console.log(this.firstName.value);
    console.log(this.lastName.value);
    console.log(this.age.value);
    console.log(this.submit.value);
  };
  render() {
    return (
      <div className="App">
        <div>
          <span>First Name:</span>
          <input
            ref={(input) => {
              this.firstName = input;
            }}
            type="text"
          />
        </div>
        <div>
          <span>Last Name:</span>
          <input
            ref={(input) => {
              this.lastName = input;
            }}
            type="text"
          />
        </div>
        <div>
          <span>Age:</span>
          <input
            ref={(input) => {
              this.age = input;
            }}
            type="number"
          />
        </div>
        <div>
          <input
            ref={(input) => {
              this.submit = input;
            }}
            type="submit"
            value="submit"
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}
