import React, { Component } from "react";

import "./NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <section>
        <h2>OOPS !></h2>
        <p>This page does not exist</p>
        <img src="#" alt="error" />
      </section>
    );
  }
}

export default NotFound;
