import React, { Component } from "react";

const Navbar = ({ searchBox, analyzeUser, user }) => (
  <div className="columns is-mobile">
    <div className="column is-half ">
      <h1>Tweet Analyzer</h1>
    </div>
    <div className="column is-half">
    <div className="field has-addons">
    <div className="control">
      <input onChange={(e) => searchBox(e.target.value)}className="input" type="text" placeholder="Search Twitter User"/>
    </div>
    <div className="control">
      <a onClick={()=> analyzeUser(user)}className="button is-info">
        Search
      </a>
    </div>
  </div>
    </div>
  </div>
)

module.exports.Navbar = Navbar;


