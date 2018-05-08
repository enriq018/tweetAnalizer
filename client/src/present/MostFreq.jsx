import React, { Component } from 'react';

const MostFreq = ({ freqMoodData }) => (
  <div className="box">
    <div className="columns">
      <div className="column">
        {`User's Most Freq Mood(s): ${freqMoodData.join(', ')}`}
      </div>
      <div className="column">
      People's Most Freq Mood:
      </div>
    </div>
  </div>
);

module.exports.MostFreq = MostFreq;
