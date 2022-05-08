const mongoose = require("mongoose");
const UsersInfomationSchema = new mongoose.Schema(
    {
        Firstname:{
            type:String,
            required:true
        },
        Lastname:{
            type:String,
            required:true
        },
        Email:{
            type:String,
            required:true,
            unique:true
            
        },
        Password:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model("UsersInfomation",UsersInfomationSchema)