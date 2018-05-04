import React, { Component } from 'react';

import { Navbar } from '../present/Navbar.js';

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blank: ''
    };
  }

  render() {
    return (
      <Navbar />
    );
  }
}


module.exports.NavbarContainer = NavbarContainer;