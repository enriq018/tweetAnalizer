const freqMood = (arr) => {
  const moodMap = {};
  arr.forEach((el) => {
    el.analyzedTweet.document_tone.tones.forEach((tone) => {
      if (moodMap[tone.tone_name]) {
        moodMap[tone.tone_name] += 1;
      } else {
        moodMap[tone.tone_name] = 1;
      }
    });
  });
  const maxMood = Math.max(...Object.values(moodMap));
  const output = Object.keys(moodMap).filter(el => moodMap[el] === maxMood);
  return output;
};

module.exports.freqMood = freqMood;
