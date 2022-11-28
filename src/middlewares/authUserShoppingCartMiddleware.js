import { ObjectID } from "bson";
import { db, dbSessions, dbUsers } from "../dataBase/db.js";
import { shoppingCartSchema } from "../models/shoppingCartProductSchema.js";

export async function authUserShoppingCartMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization.replace("Bearer ", "");
    const userFounded = await dbSessions.findOne({ token });
    const { idProduct } = req.body;

    if (!userFounded) {
      return res.sendStatus(404);
    }

    const user = await dbUsers.findOne({ _id: userFounded.id });

    const product = {
      idUser: user._id,
      idProduct
    }

    const validate = await shoppingCartSchema.validateAsync(product, {
      abortEarly: false,
    });

    const produto = await db.collection("products").findOne({_id: ObjectID(idProduct)});
    req.product = validate;
    req.infos = produto

    next();
  } catch (err) {
    err.details.map((d) => console.log(d.message));
    res.send(err.details.map((d) => d.message)).status(400);
  }
} 

export async function authGetShoppingCartMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization.replace("Bearer ", "");

    const validToken = await dbSessions.findOne({token});

    if (!validToken) {
      return res.send("userNotFound").status(401);
    }

    const user = await dbUsers.findOne({_id: validToken.id});

    req.id = user._id;

    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
}