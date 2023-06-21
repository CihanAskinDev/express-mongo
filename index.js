import express from "express"
import cors from "cors" 

// this is to be able to use the .env file
import dotenv from "dotenv" 
dotenv.config()
import { addFurniture, getFurniture } from './furniture.js'
const app = express()
app.use(cors())
 app.use(express.json()) // to be able to receive JSON as POST

 const PORT = process.env.PORT  || 4040

app.post("/", addFurniture)

app.get("/", getFurniture)

 app.listen(PORT, () => console.log(`My api is running 😎 ${PORT}`))