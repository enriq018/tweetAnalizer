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

)

const ProgressBars = ({ tweetData, freqMoodMap }) => (
  <div className="columns">
    <div className="column userProgress">
    <h2>{tweetData[0].tweet.user.screen_name}'s moods</h2>
    {Object.keys(freqMoodMap).map((el, i) => <Bar key={i} count={freqMoodMap[el]} type={el} />)}
    </div>
    <div className="column peopleProgress">
      People's Mood Stats
      <progress className="progress is-primary" value="75" max="100">30%</progress>
      <progress className="progress is-link" value="30" max="100">30%</progress>
    </div>
  </div>
);

module.exports.ProgressBars = ProgressBars;