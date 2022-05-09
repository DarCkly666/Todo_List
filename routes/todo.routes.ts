import { Router } from "express";
import {
  deleteTodo,
  getTodo,
  getTodos,
  getTodosByUser,
  postTodo,
  putTodo,
} from "../controllers/todo.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { verifySuperuser } from "../middlewares/verifySuperuser";

const routes = Router();

routes.get("/", [verifyToken, verifySuperuser], getTodos);
routes.get("/:id", [verifyToken], getTodo);
routes.get("/user/:id", [verifyToken], getTodosByUser);
routes.post("/", [verifyToken], postTodo);
routes.put("/:id", [verifyToken], putTodo);
routes.delete("/:id", [verifyToken], deleteTodo);

export default routes;
