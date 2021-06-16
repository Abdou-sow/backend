const express = require('express');
const expressValidator = require("express-validator");


const port = 8000;
const app = express();


app.use(express.json());


app.post("/validator",
    expressValidator.body("username").isLength(4),
    expressValidator.body("username").isLength(4),
    expressValidator.body("La ville de l'utilisateur").optional().isIn(["Paris", "Tokyo", "Los Angeles"]),

    (req, res) => {
        const errors = expressValidator.validationResult(req);

        if (!errors.isEmpty()) {
            // res.json({message :"il ya une erreur"})
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
            res.json({
                message: "ok"
            })
        }

    }
)


// la route GET / qui enverra tous les utilisateurs

app.get("/", (req, res) => {
    res.json({
        message: "get ok"
    })
})


// la route POST /users/add qui ajoutera un user (faites donc la validation de données avant d’enregistrer dans la bd)

app.post("/users/add", (req, res) => {
    res.json({
        message: "users/add ok"
    })
})


// la route GET /users/:username qui enverra les infos d'un user selon son username

app.get("/users/username", (req, res) => {
    res.json({
        message: "users/username ok"
    })
})


// la route GET /users/:email qui enverra les infos d'un user selon son email

app.get("/users/email", (req, res) => {
    res.json({
        message: "users/username ok"
    })
})




app.listen(port, () => {
    console.log(`jecoute sur le port ${port}`);
})