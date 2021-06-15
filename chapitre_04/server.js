const express = require('express');
const expressValidator = require("express-validator");

const port = 8000;
const app =express();

app.use(express.json());

app.get("/", (req,res) =>{
    res.json({
        message : "ok" 
    })
})



app.listen(port, () =>{
    console.log(`jecoute sur le port ${port}`);
})