import React, { Component } from "react";

const Navbar = () => (
  <div className="columns is-mobile">
    <div className="column is-half ">
      <h1>Tweet Analyzer</h1>
    </div>
    <div className="column is-half">
    <div className="field has-addons">
    <div className="control">
      <input className="input" type="text" placeholder="Search Twitter User"/>
    </div>
    <div className="control">
      <a className="button is-info">
        Search
      </a>
    </div>
  </div>
    </div>
  </div>
)

module.exports.Navbar = Navbar;


