import dotenv from "dotenv";
import connectDB from "./config/indexDB.js";


dotenv.config({
    path:'./env'
})

connectDB()
