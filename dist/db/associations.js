"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = __importDefault(require("../models/todo"));
const user_1 = __importDefault(require("../models/user"));
function associations() {
    user_1.default.hasMany(todo_1.default);
    todo_1.default.belongsTo(user_1.default);
}
exports.default = associations;
//# sourceMappingURL=associations.js.map