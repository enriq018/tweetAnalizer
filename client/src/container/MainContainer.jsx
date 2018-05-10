import React, { Component } from 'react';

import { getUserTweets } from '../requestHelper.js'
import { freqMood } from '../freqMood.js'
// import { SingleTweetView } from '../present/SingleTweetView.jsx';
import { NavbarContainer } from './NavbarContainer.jsx';
import { Tweets } from '../present/Tweets.jsx';
import { MostFreq } from '../present/MostFreq.jsx';
import { ProgressBars } from '../present/ProgressBars.jsx';
import { mock } from '../../../mock.js';


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetData: mock,
      freqMoodData: [undefined],
      freqMoodMap: { fear: 1 },
    };
    this.analyzeUser = this.analyzeUser.bind(this);
  }
  componentDidMount() {
    getUserTweets(false)
      .then((data) => {
        const freqData = freqMood(data.data);
        // console.log(freqData)
        this.setState({ tweetData: data.data, freqMoodData: freqData.max, freqMoodMap: freqData.moodMap });
      })
      .catch((error) => {
        console.log('error with didMount', error);
      });
  }


  analyzeUser(username) {
    getUserTweets(username)
      .then((data) => {
        const freqData = freqMood(data.data);
        this.setState({ tweetData: data.data, freqMoodData: freqData.max, freqMoodMap: freqData.moodMap });
      })
      .catch((error) => {
        console.log('error with analyze', error);
      });
  }

  render() {
    return (
      <div className="container" >
        <NavbarContainer analyzeUser={this.analyzeUser} />
        <br />
        <div className="box tweetContainer">
          <Tweets tweetData={this.state.tweetData} freqMoodData={this.state.freqMoodData} />
        </div>
        <div className='section'>
        <ProgressBars tweetData={this.state.tweetData} freqMoodMap={this.state.freqMoodMap}/>
        </div>
      </div>
    );
  }
}


module.exports.MainContainer = MainContainer;
