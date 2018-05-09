import React, { Component } from 'react';

const TweetToneView = ({ tones }) => {
  return tones.map(el => <a className="button is-outlined is-medium">{el.tone_name}</a>);
};

const SingleTweet = ({ tweetData }) => (
  <div className="box">

  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={tweetData.tweet.user.profile_image_url} alt="Image"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
        {tweetData.tweet.full_text}
        </p>
        {tweetData.tweet.created_at}
      </div>
      <TweetToneView tones={tweetData.analyzedTweet.document_tone.tones} />
    </div>

  </article>
</div>
)

module.exports.SingleTweet = SingleTweet;