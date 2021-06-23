const express = require('express');
const Model = require('../moldels/SignupModel');
const expressValidator = require("express-validator");
const { check } = require('express-validator')
const router = express.Router();


router.post("/signup",
    expressValidator.body("email").isEmail(),
    expressValidator.body("passWord").isLength({ min: 4 }),
    expressValidator.body('confirmPassword').custom(async (confirmPassword, { req }) => {
        const passWord = req.body.passWord
        console.log("passWord :" ,passWord);
        console.log("confirmPassword :" ,confirmPassword);
        if (passWord !== confirmPassword) {
            throw new Error('PassWords must be same')
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
                const userSaved = await user.save()
                res.json({
                    message:"the user was added",
                    userSaved
                })
            } catch (error) {
                res.json(error)
            }
        }
    })


module.exports = router;