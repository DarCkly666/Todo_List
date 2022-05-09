"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySuperuser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifySuperuser = (req, res, next) => {
    const secret = process.env.SECRET || "";
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(403).json({ error: true, msg: "Unauthorized" });
    }
    (0, jsonwebtoken_1.verify)(token, secret, (error, decode) => {
        if (error) {
            return res.status(403).json({ error: true, msg: "Invalid token" });
        }
        const role = Number(Object(decode).role);
        if (role !== 1) {
            return res.status(403).json({ error: true, msg: "Unauthorized" });
        }
        next();
    });
};
exports.verifySuperuser = verifySuperuser;
//# sourceMappingURL=verifySuperuser.js.map