import { db } from "../dataBase/db.js"

export async function authUserCheckout(req, res, next) {
  const { authorization } = req.headers
  const token = authorization?.replace("Bearer ", "")

  const session = await db.collection("sessions").findOne({ token })

  if (!session) {
    return res.sendStatus(401)
  }

  req.id = session.id

  next()
}
