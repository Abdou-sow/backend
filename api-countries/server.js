const express = require('express');
const app = express();
const port = 8000;

app.get('/country', (req, res) => {
    var array = ["senegal","france","usa","italy","belgique",]
    res.send(array);
  });

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});

