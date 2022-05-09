"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const verifySuperuser_1 = require("../middlewares/verifySuperuser");
const verifyToken_1 = require("../middlewares/verifyToken");
const routes = (0, express_1.Router)();
routes.get("/", [verifyToken_1.verifyToken, verifySuperuser_1.verifySuperuser], user_controller_1.getUsers);
routes.get("/:id", user_controller_1.getUser);
routes.post("/", user_controller_1.postUser);
routes.put("/:id", user_controller_1.putUser);
routes.delete("/:id", [verifyToken_1.verifyToken, verifySuperuser_1.verifySuperuser], user_controller_1.deleteUser);
exports.default = routes;
//# sourceMappingURL=user.routes.js.map