import { Router } from "express";
import { shoppingCartProductsController } from "../controllers/shoppingCartProductsController.js";
import { authUserShoppingCartMiddleware } from "../middlewares/authUserShoppinCartMiddleware.js";

export const shoppingCart = Router();

shoppingCart.post("/shoppingCart", authUserShoppingCartMiddleware, shoppingCartProductsController);

shoppingCart.get("/shoppingCart");