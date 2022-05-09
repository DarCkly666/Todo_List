"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_cotroller_1 = require("../controllers/login.cotroller");
const user_routes_1 = __importDefault(require("./user.routes"));
const todo_routes_1 = __importDefault(require("./todo.routes"));
const router = (0, express_1.Router)();
const version = "/api/v1";
router.post(`${version}/login`, login_cotroller_1.login);
router.use(`${version}/users`, user_routes_1.default);
router.use(`${version}/todos`, todo_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.routes.js.map