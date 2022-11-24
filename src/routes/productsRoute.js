import { Router } from "express";
import { productsController, AdminProductsController } from "../controllers/productsController.js";

export const productsRoute = Router();

productsRoute.get("/products", productsController);

productsRoute.post("/products", AdminProductsController)