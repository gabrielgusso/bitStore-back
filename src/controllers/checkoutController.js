import { db } from "../dataBase/db.js"
import { ObjectId } from 'mongodb'

export async function checkoutController(req, res){
    const {id} = req.id
    try{
        const shoppingCar = await db.collection("shoppingCart").find({idUser: ObjectId(id)}).toArray()
        const productsBuy = shoppingCar.map((e) => e.idProduct)
        const buyData = {
            userId: ObjectId(id),
            products: productsBuy,
            paymentMethod: "pix"
        }
        // const checkout = await db.collection("checkout").insertOne()
        res.send(productsBuy)
    }catch(err){
        console.log(err)
    }

}