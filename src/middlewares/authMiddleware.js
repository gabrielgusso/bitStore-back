import { authSchema } from "../models/authSchema.js";

export async function authMiddleware(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const signUp = {
      name,
      email,
      password,
    };
    await authSchema.validateAsync(signUp, { abortEarly: false });
    
    next();
  } catch (err) {
    res.status(401).send(err.details.map((d) => d.message));
  }
}
