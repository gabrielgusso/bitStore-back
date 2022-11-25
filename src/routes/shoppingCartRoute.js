import { Router } from "express";
import { authUserShoppingCartMiddleware } from "../middlewares/authUserShoppinCartMiddleware.js";

export const shoppingCart = Router();

shoppingCart.post("/shoppingCart", authUserShoppingCartMiddleware);

shoppingCart.get("/shoppingCart");