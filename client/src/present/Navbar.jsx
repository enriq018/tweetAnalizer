import React, { Component } from "react";

const Navbar = ({ searchBox, analyzeUser, user }) => (
  <nav className="level navbar">
    <div className="level-left">
      <div className="level-item title is-italic">
        <strong>Tweet Analyzer</strong>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item">
      <input onChange={(e) => searchBox(e.target.value)}className="input" type="text" placeholder="Search Twitter User" />
      </div>
      <div className="level-item">
        <a onClick={()=> analyzeUser(user)}className="button is-info">Search</a>
      </div>
    </div>
  </nav>
);

module.exports.Navbar = Navbar;
