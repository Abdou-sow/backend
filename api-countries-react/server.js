const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors())


const {countries} = require("./datacountries.js");
const app = express();

const port = 8000;


// la Route
app.get('/countries', (req, res) => {
  res.json(countries);
});


// Run server
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});