import React, { Component } from 'react';

import { moods } from '../moods.js';

const Bar = ({ count, type }) => (
  <div className="columns">
    <div className="column is-one-third">
      <p>{type}: {count}</p>
    </div>
    <div className="column">
      <progress className={`progress ${moods[type]}`} value={count * 20} max="100">10%</progress>
    </div>
  </div>
);

const ProgressBars = ({ tweetData, freqMoodMap }) => (
  <div className="columns">
    <div className="column is-half userProgress">
      <h2><strong>{tweetData[0].tweet.user.screen_name}'s moods</strong></h2>
      <br/>
      {Object.keys(freqMoodMap).map((el, i) => <Bar key={i} count={freqMoodMap[el]} type={el} />)}
    </div>

    <div className="column is-half userProgress">
      <h2><strong>People's moods</strong></h2>
      <br/>
      {Object.keys(freqMoodMap).map((el, i) => <Bar key={i} count={freqMoodMap[el]} type={el} />)}
    </div>
  </div>
);

module.exports.ProgressBars = ProgressBars;
