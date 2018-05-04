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

module.exports.SingleTweet = SingleTweet;