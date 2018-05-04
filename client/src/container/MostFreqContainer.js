import React, { Component } from 'react';

import { MostFreq } from '../present/MostFreq.js';

class MostFreqContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMF: '',
      peopleMF: '',
    };
  }
  // on load use helper function to check props for

  render() {
    return (
      <MostFreq />
    );
  }
}


module.exports.MostFreqContainer = MostFreqContainer;