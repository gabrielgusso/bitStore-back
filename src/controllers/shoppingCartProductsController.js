import { dbShoppingCart } from "../dataBase/db.js";

export async function shoppingCartProductsController(req, res) {
  try {
    const product = req.product;
    await dbShoppingCart.insertOne(product);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(401);
  }
}

export async function shoppingCartGetProductsController(req, res) {
  try {
    const id = req.id;
    const products = await dbShoppingCart.find({idUser: id }).toArray();
    res.send(products).status(200);
  } catch (err) {
    res.sendStatus(401);
  }
}
