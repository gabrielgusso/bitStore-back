import { authSchema } from "../models/authSchema.js";

export async function authMiddleware(req, res, next) {
  const { name, email, password } = req.body;
  const signUp = {
    name,
    email,
    password,
  };

  try {
    await authSchema.validateAsync(signUp, { abortEarly: false });
    res.sendStatus(200);
    next();
  } catch (err) {
    res.status(401).send(err.details.map((d) => d.message));
  }
}
