import React, { Component } from 'react';

const InfoContainer = ({ changeFeed, searchText, searchUser }) => (
  <div className="info">
    <div className="field has-addons searchBar">
      <div className="control">
        <input className="input" type="text" placeholder="Twitter User" onChange={e => searchText(e.target.value)} />
      </div>
      <div className="control">
        <a className="button is-info" onClick={() => searchUser()}>
          Search
        </a>
      </div>
    </div>
    <button onClick={() => changeFeed("Feed")} className="info_item">Feed</button>
    <button onClick={() => changeFeed("Chart")} className="info_item">Chart</button>
  </div>
);
export default InfoContainer;