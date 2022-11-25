import { Router } from "express";
import { shoppingCartGetProductsController, shoppingCartProductsController } from "../controllers/shoppingCartProductsController.js";
import { authGetShoppingCartMiddleware, authUserShoppingCartMiddleware } from "../middlewares/authUserShoppinCartMiddleware.js";

export const shoppingCart = Router();

shoppingCart.post("/shoppingCart", authUserShoppingCartMiddleware, shoppingCartProductsController);

shoppingCart.get("/shoppingCart", authGetShoppingCartMiddleware, shoppingCartGetProductsController);