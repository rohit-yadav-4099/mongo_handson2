const express = require("express")
const cors = require("cors")

const app = express()
const dotenv = require("dotenv");
const {connection} = require("./config/db");
dotenv.config();
const port = process.env.port
const route = require("./Router/route")
app.use("/api",route)
app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.listen(port, async () => {
    try {
        await connection();
        console.log("server is running..",`${port}`);
    }
    catch (err) {
        console.log(err,"error during starting the srver ");
    }
})