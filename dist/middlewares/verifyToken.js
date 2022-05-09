"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const secret = process.env.SECRET || "";
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(403).json({ error: true, msg: "Unauthorized" });
    }
    (0, jsonwebtoken_1.verify)(token, secret, (error, decode) => {
        if (error) {
            return res.status(403).json({ error: true, msg: "Invalid token" });
        }
        console.log(decode);
        next();
    });
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=verifyToken.js.map