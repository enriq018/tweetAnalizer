const { getUserTweets } = require('./twitter.js');
const { tone } = require('./tone.js');

const analyzeTweets = async (username) => {
  const tweets = await getUserTweets(username);
  const promiseArray = tweets.map(async (singleTweet, i) => {
    const analyzedTweet = await tone(singleTweet.text);
    return { tweet: tweets[i], analyzedTweet };
  });
  const tweetsAnalyzed = await Promise.all(promiseArray);

  return tweetsAnalyzed.filter((el) => {
    // remove tweets that couldn't be analyzed due to various reasons
    if (el.analyzedTweet.document_tone.tones.length > 0) {
      return el.analyzedTweet;
    }
  });
};

module.exports.analyzeTweets = analyzeTweets;
