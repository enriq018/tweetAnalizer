const sortObj = (obj) => {
  let objKeys = Object.keys(obj);
  objKeys = objKeys.sort((a,b) => obj[a] - obj[b])
  return objKeys.map((el) => {
    const newObj = {}
    newObj[el] = obj[el];
    return newObj;
  });
};

const allMoods = (arr) => {
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

  return sortObj(moodMap);
};

module.exports.allMoods = allMoods;