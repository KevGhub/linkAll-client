import React, { Component } from "react";
import AppMessenger from "./AppMessenger";
import { Switch, Route, NavLink } from "react-router-dom";

import HomePage from "./components/HomePage.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
        </nav>

        <Switch>
          {/* Home Page route should always have EXACT on it */}
          <AppMessenger />;{/*  404 route should go LAST */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
