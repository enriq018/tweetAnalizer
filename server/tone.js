const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

// boiler plate for ibm tone analyzer
const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  username: process.env.tone_username,
  password: process.env.tone_password,
  url: process.env.tone_url,
});

// promise that returns analyzed text in JSON object
const getTone = (text) => {
  const params = {
    tone_input: { text },
    content_type: 'application/json',
    // sentences is a bool and determines whether text will be broken into analyzed subsentences
    sentences: false,
  };
  return new Promise((resolve, reject) => {
    toneAnalyzer.tone(params, (err, response) => {
      if (err !== null) reject(err);
      resolve(JSON.stringify(response, null, 2));
    });
  });
};

// async wrapper
const tone = async (text) => {
  const data = await getTone(text);
  return data;
};

module.exports.tone = tone;

