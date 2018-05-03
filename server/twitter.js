const Twitter = require('twitter');

// twitter boiler plate
const client = new Twitter({
  consumer_key: process.env.twitter_consumer_key,
  consumer_secret: process.env.twitter_consumer_secret,
  bearer_token: process.env.twitter_bearer_token,
});

const getUserTweetsRequest = (user) => {
  // count = number of recent tweets
  const params = { screen_name: user, count: 2 };
  const url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
  return new Promise((resolve, reject) => {
    client.get(url, params, (err, tweets) => {
      if (err !== null) reject(err);
      resolve(tweets);
    });
  });
};

const getUserTweets = async (user) => {
  const tweets = await getUserTweetsRequest(user);
  return tweets;
};
getUserTweets('kanyewest');

module.exports.getUserTweets = getUserTweets;