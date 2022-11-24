import { db } from "../dataBase/db.js"
import { productSchema } from "../models/productSchema.js"

export async function productsController(req, res) {
  const category = req.query.category

  try {
    if (category) {
      const productsCategory = await db
        .collection("products")
        .find({ category: category })
        .toArray()
      console.log(`A categoria ecolhida foi: ${category}`)
      return res.send(productsCategory)
    }
    const products = await db.collection("products").find({}).toArray()
    console.log("sem categoria definida")
    return res.send(products)
  } catch (error) {
    console.log(error)
  }
}

export async function AdminProductsController(req, res) {
    const product = req.body
    const { description, category, name, image, price } = product
    const { password } = req.headers

    if(password !== "bitstore2022") {
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
        price
      })
      return res.sendStatus(201)
    } catch (error) {
      console.log(error)
    }
  }