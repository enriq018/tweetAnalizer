import React, { Component } from 'react';
import { SingleTweet } from './SingleTweet.jsx';
import { MostFreq } from './MostFreq.jsx';

const Tweets = ({ tweetData, freqMoodData }) => (
  <div>
    <MostFreq tweetData={tweetData} freqMoodData={freqMoodData} />
    { tweetData.map((el, key) => <SingleTweet tweetData={el} key={key}/>) }
  </div>
);

module.exports.Tweets = Tweets;
