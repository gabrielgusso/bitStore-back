import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
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

export async function signInAuthController(req, res) {
  try {
    const { email } = req.body;
    const userFounded = await dbUsers.findOne({ email });
    if (!userFounded) {
      return res.sendStatus(404);
    }
    
    const token = uuid();

    await dbUsers.insertOne({ id: userFounded._id, token });
    res.send(token);
  } catch (err) {
    res.send(err).status(400);
  }
}