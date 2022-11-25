import { Router } from "express";
import { signUpAuthController, signInAuthController } from "../controllers/authController.js";
import { authSignUpMiddleware, authSignInMiddleware } from "../middlewares/authMiddleware.js";
export const authRoute = Router();

authRoute.post("/sign-in", authSignInMiddleware, signInAuthController);

authRoute.post("/sign-up", authSignUpMiddleware, signUpAuthController);