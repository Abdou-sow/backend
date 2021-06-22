const  Mongoose  = require("mongoose");


const logingSchema = Mongoose.Schema({
    userName: String,
    passWord: String,
    date: { type: Date, default: Date.now }
})

const LogingModel = Mongoose.model("login" , logingSchema)

module.exports = LogingModel;