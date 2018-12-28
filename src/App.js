import React from "react";
import { Router } from "@reach/router";

import Main from "./Main";
import About from "./About";

export default () => (
  <Router>
    <Main path="/" />
    <About path="/about" />
  </Router>
);
