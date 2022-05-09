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
exports.deleteTodo = exports.postTodo = exports.putTodo = exports.getTodo = exports.getTodosByUser = exports.getTodos = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.findAll();
        res.status(200).json(todos);
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.getTodos = getTodos;
const getTodosByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todos = yield todo_1.default.findAll({ where: { userId: id } });
        res.status(200).json(todos);
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.getTodosByUser = getTodosByUser;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield todo_1.default.findByPk(id);
        if (!todo) {
            return res.status(404).json({ error: true, msg: "Todo not found." });
        }
        res.status(200).json(todo);
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.getTodo = getTodo;
const putTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    if (!body) {
        return res.status(400).json({ error: true, msg: "Fill all fields please" });
    }
    try {
        const todo = yield todo_1.default.findByPk(id);
        if (!todo) {
            return res.status(404).json({ error: true, msg: "Todo not found." });
        }
        yield todo.update(body);
        res.status(200).json({ error: false, msg: "Todo updated successfully." });
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.putTodo = putTodo;
const postTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    if (!body) {
        return res.status(400).json({ error: true, msg: "Fill all fields please" });
    }
    try {
        const todo = todo_1.default.build(body);
        yield todo.save();
        return res
            .status(201)
            .json({ error: false, msg: "Todo added successfully." });
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.postTodo = postTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield todo_1.default.findByPk(id);
        if (!todo) {
            return res.status(404).json({ error: true, msg: "Todo not found." });
        }
        yield todo.destroy();
        res.status(200).json({ error: false, msg: "Todo deleted successfully." });
    }
    catch (err) {
        res
            .status(500)
            .json({ error: true, msg: "Something went wrong, try again please." });
    }
});
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todo.controller.js.map