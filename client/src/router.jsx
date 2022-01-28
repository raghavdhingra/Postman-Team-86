import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Routes extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Route exact path="/" component={() => <h1>Metro Map</h1>} />
      </Router>
    );
  }
}

export default Routes;
