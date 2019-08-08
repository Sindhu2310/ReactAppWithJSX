import React, { Component } from "react";
import "./styles.css";

class Hello extends Component {
  state = {
    date1: new Date()
  };

  render() {
    return (
      <div className="style">
        <h1>
          {" "}
          {this.state.date1.getFullYear() +
            "-" +
            this.state.date1.getMonth() +
            "-" +
            this.state.date1.getDate()}
        </h1>
      </div>
    );
  }
}

export default Hello;
