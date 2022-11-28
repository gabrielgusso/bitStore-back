import { db, dbSessions, dbUsers } from "../dataBase/db.js";
import { authSignUpSchema, authSignInSchema } from "../models/authSchema.js";

export async function authSignUpMiddleware(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const signUp = {
      name,
      email,
      password,
    };
    await authSignUpSchema.validateAsync(signUp, { abortEarly: false });
    const userFounded = await dbUsers.findOne({ email });

    if (userFounded) {
      return res.status(401).send("email already in use");
    }

    next();
  } catch (err) {
    res.status(401).send(err.details.map((d) => d.message));
  }
}

export async function authSignInMiddleware(req, res, next) {
  try {
    const user = req.body;
    await authSignInSchema.validateAsync(user, { abortEarly: false });
    next();
  } catch (err) {
    res.send(err.details.map((d) => d.message)).status(400);
  }
}

export async function authDeleteShoppingCartMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;
    const products = await db.collection("products").find().toArray();
    console.log(products);

    if (!authorization) {
      res.send("Token required").status(401);
    }

    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
}
