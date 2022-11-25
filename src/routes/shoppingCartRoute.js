import { Router } from "express";
import { shoppingCartGetProductsController, shoppingCartProductsController } from "../controllers/shoppingCartProductsController.js";
import { authGetShoppingCartMiddleware, authUserShoppingCartMiddleware } from "../middlewares/authUserShoppingCartMiddleware.js";

export const shoppingCart = Router();

shoppingCart.post("/shoppingCart", authUserShoppingCartMiddleware, shoppingCartProductsController);

shoppingCart.get("/shoppingCart", authGetShoppingCartMiddleware, shoppingCartGetProductsController);