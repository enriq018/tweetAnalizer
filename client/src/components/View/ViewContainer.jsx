import React, { Component } from 'react';
import { mockData } from '../../../../mock.js';
import axios from 'axios';

import Info from '../Info/InfoContainer.jsx';
import Feed from '../Feed.jsx';

console.log(mockData);

const Chart = () => (
  <h1 className='feed'>CHART STUFF </h1>
)

class ViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      twitterData: [],
      feedSelected: 'Feed',
      searchName: '',
    };
    this.changeFeed = this.changeFeed.bind(this);
    this.selectedFeed = this.selectedFeed.bind(this);
    this.searchText = this.searchText.bind(this);
    this.searchUser = this.searchUser.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:3000/init';
    axios.get(url)
      .then((data) => {
        this.setState({ twitterData: data.data });
      });
  }

  changeFeed(target) {
    this.setState({ feedSelected: target });
  }

  selectedFeed() {
    return this.state.feedSelected === 'Feed' ?
      <Feed twitterData={this.state.twitterData} /> : <Chart />;
  }

  searchText(e) {
    this.setState({ searchName: e });
  }

  searchUser() {
    const url = `http://localhost:3000/tweets/${this.state.searchName}`;
    axios.get(url)
      .then((data) => {
        this.setState({ twitterData: data.data });
      });
  }

  render() {
    return (
      <div className="view">
        <Info changeFeed={this.changeFeed} searchText={this.searchText} searchUser={this.searchUser} />
        { this.selectedFeed() }
      </div>
    );
  }
}

export default ViewContainer;