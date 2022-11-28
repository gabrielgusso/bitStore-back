import { db } from "../dataBase/db.js"
import { productSchema } from "../models/productSchema.js"
import { ObjectId } from 'mongodb'
import dotenv from "dotenv"
dotenv.config()

export async function productsController(req, res) {
  const category = req.query.category
  const productId = req.query.productId

  try {
    if (productId) {
      const product = await db
        .collection("products")
        .findOne({ _id: ObjectId(productId) })
      return res.send(product)
    }
    if (category) {
      const productsCategory = await db
        .collection("products")
        .find({ category: category })
        .toArray()
      return res.send(productsCategory)
    }
    const products = await db.collection("products").find({}).toArray()
    return res.send(products)
  } catch (error) {
    console.log(error)
  }
}

export async function AdminProductsController(req, res) {
  const product = req.body
  const { description, category, name, image, price } = product
  const { password } = req.headers

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).send("Apenas admins podem adicionar produtos")
  }

  const validation = productSchema.validate(product, { abortEarly: false })
  if (validation.error) {
    const error = validation.error.details.map((detail) => detail.message)
    res.status(422).send(error)
    return
  }

  try {
    await db.collection("products").insertOne({
      description,
      category,
      name,
      image,
      price,
    })
    return res.sendStatus(201)
  } catch (error) {
    console.log(error)
  }
}
