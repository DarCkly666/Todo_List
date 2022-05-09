import { Router } from "express";
import { login } from "../controllers/login.cotroller";
import UserRoutes from "./user.routes";

const router = Router();
const version = "/api/v1";
router.post(`${version}/login`, login);
router.use(`${version}/users`, UserRoutes);

export default router;
