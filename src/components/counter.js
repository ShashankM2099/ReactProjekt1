import React, { Component } from "react";
//This is a class component
export default class counter extends Component() {
  constructor(props) {
    super(props);
    this.state = { count: 0, enabled: true };
  }
  render() {
    return (
      <div>
        <h1>Counter Page</h1>
      </div>
    );
  }
}
