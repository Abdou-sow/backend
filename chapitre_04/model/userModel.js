const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
    userName: String,
    email:String,
    age: Number,
    ville: String,
    date: { type: Date, default: Date.now }
})

const UserModel = mongoose.model("User", usersSchema)

module.exports = UserModel;
