import { MongoClient } from "mongodb"
import dotenv from "dotenv"
dotenv.config()

const mongoClient = new MongoClient(process.env.MONGO_URI)

try{
 await mongoClient.connect()
  console.log("MongoDB connect")
}catch(error){
  console.log(error)
}

export const db = mongoClient.db("test")