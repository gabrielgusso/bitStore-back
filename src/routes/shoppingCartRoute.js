import { Router } from "express";
import shoppingCartDeleteProductController from "../controllers/shoppingCartDeleteProductController.js";
import { shoppingCartGetProductsController, shoppingCartProductsController } from "../controllers/shoppingCartProductsController.js";
import { authGetShoppingCartMiddleware, authUserShoppingCartMiddleware } from "../middlewares/authUserShoppingCartMiddleware.js";
export const shoppingCart = Router();

shoppingCart.post("/shoppingCart", authUserShoppingCartMiddleware, shoppingCartProductsController);

shoppingCart.get("/shoppingCart", authGetShoppingCartMiddleware, shoppingCartGetProductsController);

shoppingCart.delete("/shoppingCart/:id", authUserShoppingCartMiddleware, shoppingCartDeleteProductController)