import React, { Component } from 'react';

import { SingleTweet } from './SingleTweet.jsx';
import { MostFreq } from './MostFreq.jsx';

const Tweets = ({ tweetData, freqMoodData }) => (
  <div>
    <MostFreq tweetData={tweetData} freqMoodData={freqMoodData} />
    <section className="section cards tweetBoxPadding">
      <div className="scrollarea">
        <div className="container is-fluid">
          <div className="cardColumn columns is-multiline">
            { tweetData.map((el, key) => <SingleTweet tweetData={el} key={key} />) }
          </div>
        </div>
      </div>
    </section>
  </div>
);

module.exports.Tweets = Tweets;
