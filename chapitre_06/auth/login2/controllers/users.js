const express = require('express');
const Model = require('../moldels/SignupModel');
const expressValidator = require("express-validator");
const bcryptjs = require("bcryptjs")
const router = express.Router();


router.post("/signup",
    expressValidator.body("email").isEmail(),
    expressValidator.body("passWord").isLength({ min: 8 }),
    expressValidator.body('confirmPassword').custom(async (confirmPassword, { req }) => {
        const passWord = req.body.passWord
        if (passWord !== confirmPassword) {

            throw new Error('PassWords must be same')
        }
    }),

    async (req, res) => {
        const errors = await expressValidator.validationResult(req);
        if (!errors.isEmpty()) {
            console.log("errors dans /signup :", errors);
            return res.status(400).json(
                {
                    "errors": errors
                }
            );
        } else {
            try {
                const newUser = req.body
                const passWord = bcryptjs.hashSync(req.body.passWord)
                const user = new Model({
                    email: newUser.email,
                    passWord: passWord,
                    confirmPassWord: newUser.confirmPassWord,
                    firstName: newUser.firstName,
                    surname: newUser.surname,
                    birth: Date.parse(newUser.birth)
                })
                const userSaved = await user.save()
                res.json({
                    message: "the user was added",
                    userSaved
                })
            } catch (error) {
                res.json(error)
            }
        }
    })


module.exports = router;