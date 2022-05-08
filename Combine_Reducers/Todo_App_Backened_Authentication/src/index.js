// import express
const express = require("express")

//use express all function throw app
const app = express()

console.log(app,"app")

app.use(express.json())



module.exports = app;