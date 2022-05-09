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
exports.login = void 0;
const bcrypt_1 = require("bcrypt");
const user_1 = __importDefault(require("../models/user"));
const createToken_1 = require("../utils/createToken");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = yield user_1.default.findOne({
            where: { username: username },
        });
        if (!user) {
            return res
                .status(404)
                .json({ error: true, msg: "Wrong username or password" });
        }
        const hash = user.getDataValue("password");
        (0, bcrypt_1.compare)(password, hash).then((result) => {
            if (result) {
                const token = (0, createToken_1.createToken)(user);
                res.status(200).json({ token });
            }
            else {
                res
                    .status(404)
                    .json({ error: true, msg: "Wrong username or password" });
            }
        });
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.login = login;
//# sourceMappingURL=login.cotroller.js.map