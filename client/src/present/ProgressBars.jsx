import React, { Component } from 'react';

const ProgressBars = props => (
    <div className="columns">
      <div className="column">
      User's Mood Stats
      <progress className="progress is-primary" value="15" max="100">30%</progress>
      <progress className="progress is-link" value="30" max="100">30%</progress>
      </div>
      <div className="column">
        People's Mood Stats
        <progress className="progress is-primary" value="75" max="100">30%</progress>
        <progress className="progress is-link" value="30" max="100">30%</progress>
      </div>
    </div>
);

module.exports.ProgressBars = ProgressBars;