const { getUserTweets } = require('./twitter.js');
const { tone } = require('./tone.js');

const analyzeTweets = async (username) => {
  const tweets = await getUserTweets(username);
  const promiseArray = tweets.map(async (singleTweet) => {
    const analyzedTweet = await tone(singleTweet.text);
    return analyzedTweet;
  });
  const output = await Promise.all(promiseArray);
  // console.log(output)
  return output;
};

module.exports.analyzeTweets = analyzeTweets;
