import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from "../controllers/user.controller";
import { verifySuperuser } from "../middlewares/verifySuperuser";

import { verifyToken } from "../middlewares/verifyToken";

const routes = Router();
routes.get("/", [verifyToken, verifySuperuser], getUsers);
routes.get("/:id", getUser);
routes.post("/", postUser);
routes.put("/:id", putUser);
routes.delete("/:id", [verifyToken, verifySuperuser], deleteUser);

export default routes;
