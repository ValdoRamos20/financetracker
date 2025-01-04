// PW: Boca1995 User:Vramos
import express, { Express } from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import financialRecordRouter from './routes/financial-records'
import cors from "cors"


dotenv.config({ path: ".env.local" });

const app: Express = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

const mongoURI: string = process.env.MONGODB_URI as string

mongoose
    .connect(mongoURI)
    .then(()=> console.log("Connected to MongoDB!"))
    .catch((err) => console.error("Failed to connect to MongoDB", err))

app.use("/financial-records", financialRecordRouter)

app.listen(port, ()=> {
    console.log(`Server Running on Port ${port}`)
})

