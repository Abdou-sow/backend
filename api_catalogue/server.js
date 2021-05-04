const express = require('express');
const cors = require("cors");
const cutonData = require('./datacatalogue.json')

const app = express();
app.use(cors())

const port = 8001;


// les Route
app.get('/', (req, res) => {
    res.json(cutonData);
});
// Run server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});