const express = require('express');
const UserModel = require('../model/userModel');
const expressValidator = require("express-validator");
const router = express.Router();

router.get('/', async (req, res) => {

    try {

        const user = await UserModel.find().exec()
        const nameUser = user.map(x => x.userName)

        res.json(nameUser)

    } catch (error) {

        res.json({
            message: "Error when finding user :("
        })
    }
})


router.get("/users/:userName", async (req, res) => {

    try {
        const nameUser = req.params.userName

        if (nameUser) {
            const user = await UserModel.find().exec()

            for (var i = 0; i < user.length; i++) {

                if (user[i].userName.toLowerCase() === nameUser) {

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


router.post("/users/add",
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
                const user = new UserModel({
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

router.get("/users/:id", async (req, res) => {
    try {
        const idUser = req.params.id
        if (id) {

            const userId = await UserModel.findById(idUser).exec()
            res.json(userId)

        } else {
            res.json({
                message: "cette id n'existe pas ! "
            })
        }
    } catch (err) {

        console.error(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
})
module.exports = router;