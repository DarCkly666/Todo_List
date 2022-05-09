"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
const createToken = (user) => {
    dotenv_1.default.config();
    const secret = process.env.SECRET || "";
    const payload = {
        id: user.getDataValue("id"),
        username: user.getDataValue("username"),
        email: user.getDataValue("email"),
        role: user.getDataValue("role"),
    };
    return (0, jsonwebtoken_1.sign)(payload, secret);
};
exports.createToken = createToken;
//# sourceMappingURL=createToken.js.map