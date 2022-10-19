const express = require("express")
const cors = require("cors")
const connection = require("./config/db")
const userController = require("./routes/user.routes")

const authentication = require("./middlewares/authentication")

const dotenv = require("dotenv")
dotenv.config()

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("home page")
})

app.use("/user", userController)







app.listen(process.env.PORT, async () => {
    try{
        await connection
        console.log("Db connnected")
    }
    catch(err){
        console.log("error connecting to db")
        console.log(err)
    }
    console.log("listening on 8000")
})
