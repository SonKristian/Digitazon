import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
dotenv.config()

const connect = async () => {
try{
    await mongoose.connect(process.env.MONGO_DB)
    console.log("Connected to mongoDB")
}catch (error){
   throw error
    }
}

//in questo caso se si disconnette prova a connettersi di nuovo
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

app.listen(8800, ()=>{
    connect()
    console.log("connected to back end")
})