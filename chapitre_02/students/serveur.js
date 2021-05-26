const express = require('express');
const cors = require("cors");
const studentsData = require('./datastudents.js')

const app = express();
app.use(cors())

const port = 9000;


// les Route
app.get('/', (req, res) => {
    res.json(studentsData);
});
// Run server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});