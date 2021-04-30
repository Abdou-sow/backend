const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors())


const {countries, France,Brazil,Croatia} = require("./datacountries.js");


const port = 8000;


// la Route
app.get('/countries', (req, res) => {
  res.json(countries);
});

app.get('/countries/france', (req, res) => {
    res.json(France);
  });

  app.get('/countries/brazil', (req, res) => {
    res.json(Brazil);
  });

  app.get('/countries/croatia', (req, res) => {
    res.json(Croatia);
  });

// Run server
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});