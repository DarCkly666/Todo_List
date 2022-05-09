"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database = process.env.DATABASE || "";
const username = process.env.USERNAME || "";
const password = process.env.PASSWORD || "";
const host = process.env.HOST;
const connection = new sequelize_1.Sequelize(database, username, password, {
    host: host,
    dialect: "mysql",
    logging: false,
});
exports.default = connection;
//# sourceMappingURL=connection.js.map