import React, { Component } from 'react';

import { moods } from '../moods.js';

const TweetToneView = ({ tones }) => {
  return tones.map(el =>
    <a className={ `button ${moods[el.tone_name]} is-medium is-unselectable` } >{el.tone_name}</a>);
};

const SingleTweet = ({ tweetData }) => (
  <div className="cardColumn column is-half">
    <div className="card tweetBody">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={tweetData.tweet.user.profile_image_url} alt="https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.punjabigraphics.com%2Fimages%2F158%2FBeautiful-Beach-Scene.jpg&imgrefurl=http%3A%2F%2Fwww.punjabigraphics.com%2Fbeautiful-beach-scene%2F&docid=JtocniRv4br-kM&tbnid=87LB32vzIdh5RM%3A&vet=10ahUKEwjy0K7x7vraAhUF2mMKHe7aCoIQMwiuASgAMAA..i&w=910&h=496&bih=653&biw=1366&q=beach%20img&ved=0ahUKEwjy0K7x7vraAhUF2mMKHe7aCoIQMwiuASgAMAA&iact=mrc&uact=8"/>
            </figure>
          </div>
          <div className="media-content tweetName">
            <p className="title is-4">{tweetData.tweet.user.name}</p>
            <p className="subtitle is-6">@{tweetData.tweet.user.screen_name}</p>
            {tweetData.tweet.created_at.split(' ').slice(0, 4).join(' ')}
          </div>
        </div>
        <div className="content tweetText">
          <blockquote>
            {tweetData.tweet.full_text}
          </blockquote>
          <TweetToneView tones={tweetData.analyzedTweet.document_tone.tones} />
        </div>
      </div>
    </div>
  </div>
);

module.exports.SingleTweet = SingleTweet;
