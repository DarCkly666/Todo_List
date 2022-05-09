"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controllers/todo.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
const verifySuperuser_1 = require("../middlewares/verifySuperuser");
const routes = (0, express_1.Router)();
routes.get("/", [verifyToken_1.verifyToken, verifySuperuser_1.verifySuperuser], todo_controller_1.getTodos);
routes.get("/:id", [verifyToken_1.verifyToken], todo_controller_1.getTodo);
routes.get("/user/:id", [verifyToken_1.verifyToken], todo_controller_1.getTodosByUser);
routes.post("/", [verifyToken_1.verifyToken], todo_controller_1.postTodo);
routes.put("/:id", [verifyToken_1.verifyToken], todo_controller_1.putTodo);
routes.delete("/:id", [verifyToken_1.verifyToken], todo_controller_1.deleteTodo);
exports.default = routes;
//# sourceMappingURL=todo.routes.js.map