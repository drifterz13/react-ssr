import React from "react";
import { Link } from "@reach/router";

export default class Main extends React.PureComponent {
  state = {
    count: 0
  };

  onIncrease = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  onDecrease = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.state.count}</h1>
        <button onClick={this.onIncrease}>+</button>
        <button onClick={this.onDecrease}>-</button>
        <Link to="/about">About</Link>
      </div>
    );
  }
}
