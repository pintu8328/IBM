const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const userSchema = new mongoose.Schema({
    name:{type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true}
})

const UserModel = mongoose.model("user", userSchema)


module.exports = UserModel