import React, { Component } from 'react';

import { SingleTweetView } from '../present/SingleTweetView.jsx';
import { NavbarContainer } from './NavbarContainer.jsx';
import { MostFreqContainer } from './MostFreqContainer.jsx';
import { SingleTweet } from '../present/SingleTweet.jsx';
import { ProgressBars } from '../present/ProgressBars.jsx';
class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blank: ''
    };
  }

  render() {
    return (
      <div className="container is-fluid">
        <NavbarContainer />
        <br/>
        <MostFreqContainer />
        <div className="box">
          <SingleTweet />
          <SingleTweet />
          <SingleTweet />
        </div>
        <ProgressBars />

      </div>
    );
  }
}


module.exports.MainContainer = MainContainer;

// <div className="container is-fluid">
// <Navbar />
// <br/>
// <MostFreq />

// <div className="box">
// <SingleTweet />
// <SingleTweet />
// <SingleTweet />
// </div>

// <ProgressBars />

// </div>