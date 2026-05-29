import express ,{type Express,Request,Response} from "express";
// import 'dotenv/config'
import {config} from 'dotenv';
import cors from "cors";
import connectDB from "./utils/db";
import routes from "./routes";

config()

const app:Express = express()

const port = process.env.PORT || 5050;

connectDB()

app.use(cors({
    origin:process.env.HOST_URL || "*"
    
}))
app.use(express.json())
app.use("/api",routes)


app.get("/",(req:Request,res:Response) => {
    res.send("hello world")
})

app.listen(port,() => console.log(`app is listening on port ${port}`))