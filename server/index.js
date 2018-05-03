require('dotenv').config();

const express = require('express');

const path = require('path');

const { getUserTweets } = require('./twitter.js');

const port = process.env.PORT;

const app = express();

app.use('/', express.static(path.join(__dirname, '../client/dist')));


app.listen(port, () => console.log(`live on port: ${port}`));

// app.get('/', (req, res) => res.send('!!!'));
//npm install --save watson-developer-cloud

