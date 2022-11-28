import { db } from "../dataBase/db.js"
import { ObjectId } from 'mongodb'
import { checkoutSchema } from "../models/checkoutSchema.js"

export async function checkoutController(req, res){
    const { paymentMethod } = req.body
    const payment = req.body
    const {id} = req.id

    const validation = checkoutSchema.validate(payment, { abortEarly: false })
    if (validation.error) {
      const error = validation.error.details.map((detail) => detail.message)
      res.status(422).send(error)
      return
    }
  
    try{
        const shoppingCar = await db.collection("shoppingCart").find({idUser: ObjectId(id)}).toArray()
        const productsBuy = shoppingCar.map((e) => e.idProduct)

        let totalPrice = 0
        shoppingCar.forEach((e) => totalPrice += e.price)
        const buyData = {
            userId: ObjectId(id),
            products: productsBuy,
            paymentMethod,
            totalPrice
        }
        await db.collection("checkout").insertOne(buyData)
        res.sendStatus(201)
    }catch(err){
        console.log(err)
    }

}