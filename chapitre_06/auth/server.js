const express = require('express');
const mongoose = require("mongoose");
const Model =require("./models/Loginmodel")

mongoose.connect("mongodb://localhost:27017/loging", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})





const port = 8001;
const app = express();


app.use(express.json());


app.post("/login",async(req ,res)=>{
    try {
        const newUser =req.body
        const User = new Model({
            userName: newUser.userName,
            passWord:newUser.passWord
        })
            const userSaved =await User.save()
            res.json("vous etez bien enrigistrer ",
            userSaved);
    } catch (error) {
        res.json("error :",error)
    }
})


app.listen(port, () => {
    console.log(`jecoute sur le port ${port}`);
})