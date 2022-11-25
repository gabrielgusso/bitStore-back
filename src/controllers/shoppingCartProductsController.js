import e from "express";
import { db, dbShoppingCart } from "../dataBase/db.js";

export async function shoppingCartProductsController(req, res) {
  try {
    await dbShoppingCart.insertOne(req.product);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
}

export async function shoppingCartGetProductsController(req, res) {
  try {
    const name = req.name;
    const products = await dbShoppingCart.find({ name }).toArray();
    res.send(products).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
}
