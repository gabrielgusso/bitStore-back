import { Router } from "express";
import { signUpAuthController } from "../controllers/signUpAuthController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const authRoute = Router();

authRoute.post("/sign-up", authMiddleware, signUpAuthController);