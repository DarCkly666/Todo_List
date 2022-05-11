import { Router } from "express";
import { login } from "../controllers/login.cotroller";
import UserRoutes from "./user.routes";
import TodoRoutes from "./todo.routes";
import { signUpUser } from "../controllers/signup.controller";

const router = Router();
const version = "/api/v1";

router.post(`${version}/login`, login);
router.post(`${version}/signup`, signUpUser);
router.use(`${version}/users`, UserRoutes);
router.use(`${version}/todos`, TodoRoutes);

export default router;
