const app = require("./index")
const connect = require("./config/db")
const port = 5000


app.listen(port, async function()
{
    try {
        user = await connect()
        console.log("server runninng 8080")
        console.log(`server working on ${port}`)
    } catch (error) {
        console.log(error)
    }
});