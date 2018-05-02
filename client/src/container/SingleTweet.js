import React, { Component } from 'react';

import { SingleTweetView } from '../present/SingleTweetView.js';

class SingleTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blank: ''
    };
  }

  render() {
    return (
      <SingleTweetView />
    );
  }
}


module.exports.SingleTweet = SingleTweet;
