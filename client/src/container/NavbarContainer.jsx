import React, { Component } from 'react';

import { Navbar } from '../present/Navbar.jsx';

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.searchBox = this.searchBox.bind(this);
  }

  searchBox(e) {
    this.setState({ username: e });
  }

  render() {
    return (
      <Navbar searchBox={this.searchBox} analyzeUser={this.props.analyzeUser} user={this.state.username} />
    );
  }
}


module.exports.NavbarContainer = NavbarContainer;