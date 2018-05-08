import React, { Component } from 'react';
import { SingleTweet } from './SingleTweet.jsx';

const Tweets = ({ tweetData }) => (
  <div>
    { tweetData.map((el, key) => <SingleTweet tweetData={el} key={key}/>) }
  </div>
);

module.exports.Tweets = Tweets;
