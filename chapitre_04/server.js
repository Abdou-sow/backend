const express = require('express');
const mongoose = require("mongoose")
const userRoutes = require('./controllers/users')


mongoose.connect("mongodb://localhost:27017/validator", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})





const port = 8000;
const app = express();


app.use(express.json());



// la route GET / qui enverra tous les utilisateurs

app.use("/",userRoutes)


// la route POST /users/add qui ajoutera un user (faites donc la validation de données avant d’enregistrer dans la bd)

app.use("/users/add",userRoutes)
    
// la route GET /users/:username qui enverra les infos d'un user selon son username

app.use("/users/:userName", userRoutes )



// la route GET /users/:email qui enverra les infos d'un user selon son email

app.get("/users/email", (req, res) => {

    res.json({
        message: "users/username ok"
    })
})

// bonus 

app.get("/users/:id" , userRoutes)

//pour toutes les routes inhesitante
app.get("*", (req, res) => {
    res.json({
        message: "The route doesn't exist"
    })
})


app.listen(port, () => {
    console.log(`jecoute sur le port ${port}`);
})