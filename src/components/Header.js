import React, { Component } from "react";
import CounterButton from "./CounterButton";
import CounterButton2 from "./CounterButton2";

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {}
  render() {
    return (
      <div>
        <CounterButton color={"yellow"} />
        <CounterButton2 color={"yellow"} />
        <h1 className="f1">RoobotFriens</h1>
      </div>
    );
  }
}

export default Header;
