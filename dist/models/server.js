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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("../db/connection"));
const associations_1 = __importDefault(require("../db/associations"));
class Server {
    constructor() {
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        //DB Connection
        this.dbConnetion();
        (0, associations_1.default)();
    }
    dbConnetion() {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.authenticate();
            yield connection_1.default.sync({ alter: true });
            console.log("Database connected");
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map