import React, { Component } from 'react';
import { moods } from '../moods';


const MostFreq = () => (
<div className="box">
  check it
</div>
)


const TweetToneView = ({ tones }) => {
  return tones.map(el =>
    <a className={ `button ${moods[el.tone_name]} is-medium is-unselectable` } >{el.tone_name}</a>);
};

const SingleTweet = ({ data }) => (
  <div class="card tweet">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src={data.tweet.user.profile_image_url} alt="Placeholder image"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{data.tweet.user.name}</p>
        <p className="subtitle is-6">@{data.tweet.user.screen_name}</p>
        {data.tweet.created_at.split(' ').slice(0, 4).join(' ')}
      </div>
    </div>

    <div class="content">
      <blockquote>
      {data.tweet.full_text}
      </blockquote>

      <TweetToneView tones={data.analyzedTweet.document_tone.tones} />

    </div>
  </div>
</div>

)


const Feed = ({ twitterData }) => (
  <div className="feed">
    <div className="feed_top">
     { /*<MostFreq />*/}
    </div>
    <div className="feed_mid">
    {twitterData.map((el, index) => <SingleTweet data={el}/>)}




    </div>
  </div>
);
export default Feed;
