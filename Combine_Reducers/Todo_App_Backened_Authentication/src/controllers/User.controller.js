const express = require("express")

const router = express.Router()
const Users = require("./User.controller")

router.get("/",async(req,res)=>{
    try {
        
        const users = await Users.find().lean().exec()

    } catch (error) {
        
    }
})