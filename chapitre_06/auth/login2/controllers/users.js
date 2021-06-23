const express = require('express');
// const bcrypt = require('bcryptjs');
const Model = require('../moldels/SignupModel');
const expressValidator = require("express-validator");
const router = express.Router();


router.post("/signup",
    expressValidator.body("passWord").isLength(8)
        .custom(async (confirmPassword, { req }) => {
            const password = req.body.password
            if (password !== confirmPassword) {
                throw new Error('Passwords must be same')
            }
        }),
    async (req, res) => {
        const errors = await expressValidator.validationResult(req);
        if (!errors.isEmpty()) {
            console.log("errors :", errors);
            return res.status(400).json(
                {
                    "errors": errors
                }
            );
        } else {
            try {
                const newUser = req.body
                const user = new Model({
                    email: newUser.email,
                    passWord: newUser.passWord,
                    confirmPassWord: newUser.confirmPassWord,
                    firstName: newUser.firstName,
                    surname: newUser.surname,
                    birth: newUser.birth
                })

            } catch (error) {
                res.json(error)
            }
        }
    })


module.exports = router;