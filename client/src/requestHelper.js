const axios = require('axios');

const getWrapper = (username) => {
  const url = `http://localhost:3000/tweets/${username}`;
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getUserTweets = async (username = 'barackobama') => {
  const data = await getWrapper(username);
  return data;
};

module.exports.getUserTweets = getUserTweets;
