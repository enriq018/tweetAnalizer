import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import View from './View/ViewContainer.jsx';

const MainContainer = () => (
  <div className="container is-fullhd main">
    <NavBar />
    <View />
  </div>
);

export default MainContainer;
