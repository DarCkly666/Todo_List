"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = require("bcrypt");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.findAll();
        res.status(200).json(users);
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: false, msg: "User not found" });
        }
        res.status(200).json(user);
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    if (!body) {
        return res.status(400).json({ error: true, msg: "Fill al fields please." });
    }
    try {
        const salt = 5;
        const hashPassword = yield (0, bcrypt_1.hash)(body.password, salt);
        body.password = hashPassword;
        const newUser = user_1.default.build(body);
        yield newUser.save();
        res.status(201).json({ error: false, msg: "User created successfully." });
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: true, msg: "User not found" });
        }
        if (body.password) {
            const salt = 5;
            const hashPassword = yield (0, bcrypt_1.hash)(body.password, salt);
            body.password = hashPassword;
        }
        yield user.update(body);
        res.status(200).json({ error: false, msg: "User updated successfully." });
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: true, msg: "User not found" });
        }
        yield user.destroy();
        res.status(200).json({ error: false, msg: "User deleted successfully." });
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map