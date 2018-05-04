import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MainContainer } from "./container/MainContainer.js";


const App = () => (
  <MainContainer />
)

ReactDOM.render(<App />, document.getElementById("app"));