const express = require('express');
const mongoose = require("mongoose");
const useRouters = require('./controllers/users')
const Cors = require('cors')



mongoose.connect("mongodb://localhost:27017/loging2", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})





const port = 8002;
const app = express();


app.use(express.json());
app.use(Cors());

app.use("/", useRouters)
app.use("/signup", useRouters)


app.listen(port, () => {
    console.log(`jecoute sur le port ${port}`);
})