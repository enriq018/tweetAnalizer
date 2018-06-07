import React, { Component } from 'react';

import * as V from 'victory';
import { VictoryPie } from 'victory';
import { allMoods } from '../allMoods.js';

const colorMatcher = {
  Analytical: '#3dd1af',
  Anger: '#fa4261',
  Confident: '#229cee',
  Fear: '#090909',
  Joy: '#ffdd58',
  Tentative: '#3273dc',
  Sadness: '#9e9e9e',
  undefined: '#4fd161',
};

const PieGraph = ({ data, colors, total, name }) => (
  <div className="bar box mainPie">
    <p className="has-text-centered title is-4 underline">{`${name} Tweets Analyzied: ${total}`}</p>
    <VictoryPie
      colorScale={colors}
      data={data}
      padding={{ left: 95, right: 95 }} />
  </div>
);

const Chart = ({ data }) => {
  const moods = allMoods(data);
  const wrapMoods = moods.map((el) => {
    return { x: ` ${Object.keys(el)[0]}: ${Object.values(el)[0]}`, y: Object.values(el)[0] };
  });
  const wrapColors = moods.map(el => colorMatcher[Object.keys(el)]);

  return (
    <div className="chart">
      <PieGraph data={wrapMoods} colors={wrapColors} total={data.length} name={data[0].tweet.user.screen_name} />
    </div>
  );
};

export default Chart;
