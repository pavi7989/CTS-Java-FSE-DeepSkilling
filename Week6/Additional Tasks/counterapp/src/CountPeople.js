// src/CountPeople.js
import React, { Component } from "react";

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0,
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1,
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <button
          onClick={this.updateEntry}
          style={{ backgroundColor: "lightgreen", padding: "10px", margin: "20px" }}
        >
          Login
        </button>
        <span style={{ marginRight: "50px" }}>
          {this.state.entryCount} People Entered!!!
        </span>

        <button
          onClick={this.updateExit}
          style={{ backgroundColor: "lightgreen", padding: "10px", margin: "20px" }}
        >
          Exit
        </button>
        <span>{this.state.exitCount} People Left!!!</span>
      </div>
    );
  }
}

export default CountPeople;
