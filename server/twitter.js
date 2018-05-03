const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  bearer_token: process.env.bearer_token,
});

const getUserTweetsRequest = (user) => {
  const params = { screen_name: user, count: 1 };
  const url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
  return new Promise((resolve, reject) => {
    client.get(url, params, (err, tweets) => {
      if (err !== null) return reject(err);
      return resolve(tweets);
    });
  });
};

const getUserTweets = async (user) => {
  const tweets = await getUserTweetsRequest(user);
  // console.log(tweets[0].text)
  return tweets;
};
// getUserTweets('kanyewest');

module.exports.getUserTweets = getUserTweets;
