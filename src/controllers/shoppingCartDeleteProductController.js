import { ObjectID } from "bson";
import { db } from "../dataBase/db.js";

export default async function shoppingCartDeleteProductController(req, res) {
  try {
    const id = req.params;
    const promisse = await db.collection("shoppingCart").deleteOne({ _id: ObjectID(id) });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
}
