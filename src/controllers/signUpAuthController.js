import bcrypt from "bcrypt";
import { dbUsers } from "../dataBase/db.js";

export async function signUpAuthController(req, res) {
  const { name, email, password } = req.body;

  const newPassword = bcrypt.hashSync(password, 10);

  const user = {
    name,
    email,
    password: newPassword,
  };

  try {
    await dbUsers.insertOne(user);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    es.sendStatus(400);
  }
}
