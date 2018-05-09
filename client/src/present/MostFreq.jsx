import React, { Component } from 'react';

const MostFreq = ({ freqMoodData, tweetData }) => (
  <div className="box">

    <div className="columns">
      <div className="column">
        {tweetData.length > 0 ? `${tweetData[0].tweet.user.screen_name}'s Most Frequent Mood: ${freqMoodData.join(', ')}` : ''}
      </div>
      <div className="column">
      People's Most Frequent Mood:
      </div>
    </div>
    </div>
);

module.exports.MostFreq = MostFreq;
