import { Router } from "express"
import { checkoutController } from "../controllers/checkoutController.js"
import { authUserCheckout } from "../middlewares/authUserCheckout.js"

export const checkoutRoute = Router()

checkoutRoute.post("/checkout", authUserCheckout, checkoutController)