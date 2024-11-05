import { Router } from "express";
import { authLoginCon, authRegisterCon } from "../controllers/index.js";
import { LoginSchema, RegisterSchema } from "../schema/index.js";
import { authMiddleware } from "../middleware/index.js";
export const authRoutes = new Router();

authRoutes.post("/register", authMiddleware(RegisterSchema), authRegisterCon);
authRoutes.post("/login", authMiddleware(LoginSchema), authLoginCon);
