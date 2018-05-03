require('dotenv').config();

const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const { analyzeTweets } = require('./analyzeTweets.js');

const port = process.env.PORT;

const app = express();

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.get('/tweets/:username', async (req, res) => {
  const data = await analyzeTweets(req.params.username);
  res.send(data);
});

app.listen(port, () => console.log(`live on port: ${port}`));

