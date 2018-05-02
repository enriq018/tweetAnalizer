const express = require('express');

const path = require('path');

const port = 3000;


const app = express();

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`live on port: ${port}`));
