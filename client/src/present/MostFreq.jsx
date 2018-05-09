import React, { Component } from 'react';

import { moods } from '../moods.js';
import { freqMood } from '../freqMood';

const Tag = ({ mood }) => (
  <span className={`tag ${moods[mood]} is-medium`}>{mood}</span>
)

const MostFreq = ({ freqMoodData, tweetData }) => (
  <div className='box freqTitle'>
    <div className="columns">
      <div className="column">
        {tweetData.length > 0 ? <div>
          {`${tweetData[0].tweet.user.screen_name}'s Most Frequent Mood:`}
          {freqMoodData.map((el, i) => <Tag mood={el} key={i} />)}
        </div> : ''}
      </div>
      <div className="column">
      People's Most Frequent Mood:
      </div>
    </div>
    </div>
);

module.exports.MostFreq = MostFreq;
