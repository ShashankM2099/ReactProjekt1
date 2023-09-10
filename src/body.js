import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
//importing compo's
import Home from "./components/home";
import Assignments from "./components/assignments";
import Info from "./components/info";
import Projekts from "./components/projekts";
//expo function
export default class body extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, enabled: true };
  }

  render() {
    return (
      <div className="content">
        <div>
          {/* Adding a route to different JS files */}
          <Routes>
            {/* JS File routing */}
            <Route path="/home" element={<Home></Home>} />
            <Route path="/projekts" element={<Projekts></Projekts>} />
            <Route path="/assignments" element={<Assignments></Assignments>} />
            <Route path="/info" element={<Info></Info>} />
            {/* Added a new route but can't see it */}
          </Routes>
          <div>
            <h1>Counter Page</h1>
            <h1>{this.props.name}</h1>
            <p>You clicked {this.state.count} times</p>
            <button
              type="submit"
              onClick={() =>
                this.setState({
                  count: this.state.count + 1,
                })
              }
            >
              Click Me
            </button>
            <button
              type="reset"
              onClick={() => {
                this.setState({
                  count: 0,
                });
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
