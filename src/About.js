import React from "react";
import { Link } from "@reach/router";

export default () => (
  <React.Fragment>
    <h1>About</h1>
    <button onClick={() => alert("hi")}>Say Hi</button>
    <Link to="/">Home</Link>
  </React.Fragment>
);
