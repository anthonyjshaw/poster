const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'));

});

app.get('/posts', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/posts.html'));
});


mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true},  () => {
  console.log("connected!");
})

app.listen(3000);
