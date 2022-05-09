import { Request, Response } from "express";
import Todo from "../models/todo";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};
export const getTodosByUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const todos = await Todo.findAll({ where: { userId: id } });
    res.status(200).json(todos);
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};

export const getTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: true, msg: "Todo not found." });
    }
    res.status(200).json(todo);
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};

export const putTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  if (!body) {
    return res.status(400).json({ error: true, msg: "Fill all fields please" });
  }

  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: true, msg: "Todo not found." });
    }
    await todo.update(body);
    res.status(200).json({ error: false, msg: "Todo updated successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};

export const postTodo = async (req: Request, res: Response) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({ error: true, msg: "Fill all fields please" });
  }

  try {
    const todo = Todo.build(body);
    await todo.save();
    return res
      .status(201)
      .json({ error: false, msg: "Todo added successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: true, msg: "Todo not found." });
    }
    await todo.destroy();
    res.status(200).json({ error: false, msg: "Todo deleted successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};
