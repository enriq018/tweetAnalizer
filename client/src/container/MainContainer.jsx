import React, { Component } from 'react';

import { getUserTweets } from '../requestHelper.js'
import { freqMood } from '../freqMood.js'
// import { SingleTweetView } from '../present/SingleTweetView.jsx';
import { NavbarContainer } from './NavbarContainer.jsx';
import { Tweets } from '../present/Tweets.jsx';
import { MostFreq } from '../present/MostFreq.jsx';
import { ProgressBars } from '../present/ProgressBars.jsx';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetData: [],
      freqMoodData: [],
    };
    this.analyzeUser = this.analyzeUser.bind(this);
  }
  componentDidMount() {
    getUserTweets()
      .then((data) => {
        this.setState({ tweetData: data.data, freqMoodData: freqMood(data.data) });
      })
      .catch((error) => {
        console.log('error with didMount', error);
      });
  }

  analyzeUser(username) {
    getUserTweets(username)
      .then((data) => {
        this.setState({ tweetData: data.data, freqMoodData: freqMood(data.data) });
      })
      .catch((error) => {
        console.log('error with analyze', error);
      });
  }

  render() {
    return (
      <div className="container is-fluid main">
        <NavbarContainer analyzeUser={this.analyzeUser} />
        <br />
        <div className="box">
          <Tweets tweetData={this.state.tweetData} freqMoodData={this.state.freqMoodData} />
        </div>
        <ProgressBars />

      </div>
    );
  }
}


module.exports.MainContainer = MainContainer;
