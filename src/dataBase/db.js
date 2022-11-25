import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB connect");
} catch (error) {
  console.log(error);
}

export const db = mongoClient.db("bitStore");
export const dbUsers = db.collection("users");
export const dbSessions = db.collection("sessions");
export const dbShoppingCart = db.collection("shoppingCart");
