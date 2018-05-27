import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import View from './View/ViewContainer.jsx';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  };



  render() {
    return (


      <div className="container is-fullhd main">
      <NavBar />
      <View />
      </div>
    );
  }
}

export default MainContainer;
