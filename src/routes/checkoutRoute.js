import { Router } from "express"
import { checkoutController } from "../controllers/checkoutController.js"

export const checkoutRoute = Router()

checkoutRoute.post("/checkout", checkoutController)