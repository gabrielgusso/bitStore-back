import { dbSessions } from "../dataBase/db.js";
import { shoppingCartSchema } from "../models/shoppingCartProductSchema.js";

export async function authUserShoppingCartMiddleware(req, res, next) {
  try {
    const product = req.body;
    const { authorization } = req.headers;
    const token = authorization.replace("Bearer ", "");

    const userFounded = await dbSessions.findOne({ token });

    if (!userFounded) {
      return res.sendStatus(404);
    }

    const validate = await shoppingCartSchema.validateAsync(product, {
      abortEarly: false,
    });

    req.product = validate;

    next();
  } catch (err) {
    err.details.map((d) => console.log(d.message));
    res.send(err.details.map((d) => d.message)).status(400);
  }
}
