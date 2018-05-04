import React, { Component } from 'react';

const SingleTweet = props => (
  <div className="box">

  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <a className="button is-danger is-rounded is-small">Rounded</a>
      <a className="button is-danger is-rounded is-small">Rounded</a>
    </div>

  </article>
</div>
)

const Navbar = () => (
  <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <h1>Tweet Analyzer</h1>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <div className="field has-addons">
            <div className="control">
              <input className="input" type="text" placeholder="Search Twitter User"/>
            </div>
            <div className="control">
              <a className="button is-info">
                Search
              </a>
            </div>
          </div>
          </p>
          <p className="control">

          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
)

const MostFreq = props => (
  <div className="box">
  <div className="columns">
    <div className="column">
    User's Most Freq Mood:
    </div>
    <div className="column">
    People's Most Freq Mood:
    </div>
  </div>
</div>
)

const ProgressBars = props => (
  <div className="box">
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
  </div>
);

const SingleTweetView = props => (
  <div className="container is-fluid">
    <Navbar />
    <br/>
    <MostFreq />

    <div className="box">
    <SingleTweet />
    <SingleTweet />
    <SingleTweet />
    </div>

    <ProgressBars />

</div>
);


module.exports.SingleTweetView = SingleTweetView;

