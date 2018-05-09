import React, { Component } from 'react';

const moods = {
  'Analytical': 'button is-primary',
  Confident: 'button is-info',
  Fear: 'button is-black',
  Joy: 'button is-warning',
  Tentative: 'button is-link',
  undefined: 'button is-outlined',
}

const TweetToneView = ({ tones }) => {
  return tones.map(el => <a className={ `${moods[el.tone_name]} is-medium` }>{el.tone_name}</a>);
};

const SingleTweet = ({ tweetData }) => (
  <div className="box tweetBody">

  <article className='media'>
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={tweetData.tweet.user.profile_image_url} alt="Image"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
        {tweetData.tweet.full_text}
        <br />
        {tweetData.tweet.created_at.split(' ').slice(0, 4).join(' ')}
        </p>
      </div>

      <TweetToneView tones={tweetData.analyzedTweet.document_tone.tones} />
    </div>

  </article>
</div>
)

module.exports.SingleTweet = SingleTweet;