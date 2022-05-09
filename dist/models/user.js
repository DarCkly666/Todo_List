"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const User = connection_1.default.define("user", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    avatar: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "avatar.jpg",
    },
}, {
    indexes: [
        {
            unique: true,
            fields: ["username"],
        },
        { unique: true, fields: ["email"] },
    ],
    timestamps: false,
});
exports.default = User;
//# sourceMappingURL=user.js.map