const Mongoose = require("mongoose");


const SignupSchema = Mongoose.Schema({
    email: String,
    passWord: String,
    confirmPassword: String,
    firstName: String,
    surname: String,
    birth: { type: Date },
    date: { type: Date, default: Date.now }
})

const SignupModel = Mongoose.model("Signup", SignupSchema)

module.exports = SignupModel;