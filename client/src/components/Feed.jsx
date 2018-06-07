import React, { Component } from 'react';
import { moods } from '../moods';

const initData = { tweet: { user: { name: 'George Michael' } } };
const initFreq = { max: ['Fear'] };

const MostFreq = ({ freqData, data }) => {
  if (!freqData) {
    freqData = initFreq;
  }

  if (!data) {
    data = initData
  }
  return (
    <button className={`button ${moods[freqData.max[0]]} topBar`}>
      <span>
        {<p className="title is-5 is-italic mostText">{data[0].tweet.user.screen_name}'s Most Frequent Mood: {freqData.max}</p>}
      </span>
    </button>
  );
};


const TweetToneView = ({ tones }) => {
  return tones.map(el =>
    <a className={ `button ${moods[el.tone_name]} is-medium is-unselectable` } >{el.tone_name}</a>);
};

const SingleTweet = ({ data }) => {
  const style = {
    'background-image': `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.5)),url(${data.tweet.user.profile_banner_url})`,
    'z-index': '0',
  };

  return (
    <div className="card tweet" style={style}>
      <div className="card-content opHelper">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img className="rounded userPic"  src={data.tweet.user.profile_image_url} alt="Placeholder image"/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{data.tweet.user.name}</p>
            <p className="subtitle is-6">@{data.tweet.user.screen_name}</p>
            {data.tweet.created_at.split(' ').slice(0, 4).join(' ')}
          </div>
        </div>
        <div className="content">
          <blockquote>
            {data.tweet.full_text}
          </blockquote>
          <TweetToneView tones={data.analyzedTweet.document_tone.tones} />
        </div>
      </div>
    </div>
  );
};


const Feed = ({ twitterData, freqData }) => (
  <div className="feed">
    <div className="feed_top">
      <MostFreq freqData={freqData} data={twitterData} />
    </div>
    <div className="feed_mid">
      {twitterData.map((el, index) => <SingleTweet data={el} index={index} />)}
    </div>
  </div>
);
export default Feed;
