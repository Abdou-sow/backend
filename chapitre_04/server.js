const express = require('express');
const expressValidator = require("express-validator");
const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/validator", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

const usersSchema = mongoose.Schema({
    userName: String,
    age: Number,
    ville: String,
    date: { type: Date, default: Date.now }
})

const User = mongoose.model("User", usersSchema)



const port = 8000;
const app = express();


app.use(express.json());


app.post("/users/add",
    expressValidator.body("username").isLength(4),
    expressValidator.body("age").isLength(2),
    expressValidator.body("ville").optional().isIn(["Paris", "Tokyo", "Los Angeles"]),

    async (req, res) => {
        const errors = await expressValidator.validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(400).json(
                {
                    "errors": [
                        {
                            "location": "body",
                            "msg": "Invalid value",
                            "param": "username"
                        }
                    ]
                }
            );
        } else {
            try {
                const newUser = req.body

                const user = new User({
                    userName: newUser.username,
                    age: newUser.age,
                    ville: newUser.ville,

                })

                const usersaved = await user.save()

                res.json({
                    message: "The user was saved correctly",
                    newUser
                })


            } catch (error) {
                console.error("Error in POST /Validator", error)

                res.json({
                    message: "The user was not saved :("
                })
            }

        }
    })

// la route GET / qui enverra tous les utilisateurs

app.get("/", async (req, res) => {

    try {

        const user = await User.find().exec()
        const nameUser = user.map(x => x.userName)

        // console.log("nameUser :" ,nameUser);

        res.json(nameUser)

    } catch (error) {

        res.json({
            message: "Error when finding user :("
        })
    }
})


// la route POST /users/add qui ajoutera un user (faites donc la validation de données avant d’enregistrer dans la bd)

app.post("/users/add", (req, res) => {
    res.json({
        message: "users/add ok"
    })
})


// la route GET /users/:username qui enverra les infos d'un user selon son username

app.get("/users/:userName", async (req, res) => {

    try {
        const nameUser = req.params.userName

        if (nameUser) {
            const user = await User.find().exec()
            console.log(" :", user);
            for (var i = 0; i < user.length; i++) {

                if (user[i].userName.toLowerCase() ===nameUser ) {

                    res.json(user[i])
                }
            }
        } else {
            res.json({
                message: "user not found"
            })
        }
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

})



// la route GET /users/:email qui enverra les infos d'un user selon son email

app.get("/users/email", (req, res) => {

    res.json({
        message: "users/username ok"
    })
})

//pour toutes les routes inhesitante
app.get("*", (req, res) => {
    res.json({
        message: "The route doesn't exist"
    })
})


app.listen(port, () => {
    console.log(`jecoute sur le port ${port}`);
})