const mongoose = require("mongoose")

// mongodb+srv://rohit:<password>@cluster0.xsahu.mongodb.net/test

const connect = ()=>{
    return mongoose.connect(
      "mongodb+srv://rohit:12345@cluster0.03mwk.mongodb.net/Todo_App_Authentication?retryWrites=true&w=majority"
    );
}
module.exports = connect


