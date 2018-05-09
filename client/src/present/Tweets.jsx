import React, { Component } from 'react';
import { SingleTweet } from './SingleTweet.jsx';
import { MostFreq } from './MostFreq.jsx';

const Tweets = ({ tweetData, freqMoodData }) => (
  <div>
    <MostFreq tweetData={tweetData} freqMoodData={freqMoodData} />
    <div className='scrollarea'>
    { tweetData.map((el, key) => <SingleTweet tweetData={el} key={key}/>) }
    </div>
  </div>
);

module.exports.Tweets = Tweets;
