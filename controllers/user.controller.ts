import { Request, Response } from "express";
import User from "../models/user";
import { hash } from "bcrypt";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: false, msg: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};

export const postUser = async (req: Request, res: Response) => {
  const { body } = req;
  if (!body) {
    return res.status(400).json({ error: true, msg: "Fill al fields please." });
  }
  try {
    const salt: number = 5;
    const hashPassword = await hash(body.password, salt);
    body.password = hashPassword;
    const newUser = User.build(body);
    await newUser.save();
    res.status(201).json({ error: false, msg: "User created successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};

export const putUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: true, msg: "User not found" });
    }
    if (body.password) {
      const salt: number = 5;
      const hashPassword = await hash(body.password, salt);
      body.password = hashPassword;
    }
    await user.update(body);
    res.status(200).json({ error: false, msg: "User updated successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: true, msg: "User not found" });
    }
    await user.destroy();
    res.status(200).json({ error: false, msg: "User deleted successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};
