import { Request, Response } from "express";
import { hash } from "bcrypt";
import User from "../models/user";

export const signUpUser = async (req: Request, res: Response) => {
  let { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: true, msg: "Fill all fields please." });
  }
  try {
    const salt = 5;
    password = await hash(password, salt);
    const newUser = User.build({ username, email, password });
    await newUser.save();
    res.status(200).json({ error: false, msg: "User created successfully." });
  } catch (err) {
    res.status(500).json({ error: true, msg: "Something went wrong." });
  }
};
