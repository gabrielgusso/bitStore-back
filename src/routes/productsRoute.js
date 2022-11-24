import { Router } from "express";
import { productsController } from "../controllers/productsController.js";

export const productsRoute = Router();

productsRoute.get("/products", productsController);