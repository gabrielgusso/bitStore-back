import { dbShoppingCart } from "../dataBase/db.js";

export async function shoppingCartProductsController(req, res) {
    try {
        await dbShoppingCart.insertOne(req.product);
        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.sendStatus(401);
    }
}