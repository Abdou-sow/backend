const express = require('express');
const port = 8000;

const app = express();

//const books = ["Beowulf", "Hamlet, Othello, Romeo and Juliet, MacBeth", "Oliver Twist, A Christmas Carol", "The Picture of Dorian Gray, The Importance of Being Earnest"]

app.get('/authors/i/books/', (req, res) => {
    res.send(books[i - 1]);
});

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});