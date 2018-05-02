import React, { Component } from "react";
import ReactDOM from "react-dom";
import { SingleTweet } from "./container/SingleTweet.js";


class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <SingleTweet />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));