const express = require('express');
const cors = require("cors");
const moviesData = require('./datamovies.json')

const app = express();
app.use(cors())

const port = 8001;


// les Route
app.get('/', (req, res) => {
    res.json(moviesData);
});
// Run server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});