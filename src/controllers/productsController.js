import { db } from "../dataBase/db.js"

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
