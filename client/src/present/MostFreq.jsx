import React, { Component } from 'react';

import { moods } from '../moods.js';

const Tag = ({ mood }) => (
  <span className={`tag ${moods[mood]} is-medium`}><strong>{mood}</strong></span>
);

const MostFreq = ({ freqMoodData, tweetData }) => (
  <div className="columns is-gapless">
    <div className="column">
      <div className={`hero ${moods[freqMoodData[0]]} is-small`}>
        {tweetData.length > 0 ?
          <div>
            {`${tweetData[0].tweet.user.screen_name}'s Most Frequent Mood: `}
            {freqMoodData.map((el, i) => <Tag mood={el} key={i} />)}
          </div> : ''
        }
      </div>
    </div>
    <div className="column">
      <div className={`hero ${moods[freqMoodData[0]]} is-small`}>
        {tweetData.length > 0 ? <div>
          {`${tweetData[0].tweet.user.screen_name}'s Most Frequent Mood: `}
          {freqMoodData.map((el, i) => <Tag mood={el} key={i} />)}
        </div> : ''}
      </div>
    </div>
  </div>
);

module.exports.MostFreq = MostFreq;
