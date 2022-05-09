import { Request, Response } from "express";
import { compare } from "bcrypt";

import User from "../models/user";
import { createToken } from "../utils/createToken";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: { username: username },
    });
    if (!user) {
      return res
        .status(404)
        .json({ error: true, msg: "Wrong username or password" });
    }

    const hash = user.getDataValue("password");
    compare(password, hash).then((result: Boolean) => {
      if (result) {
        const token = createToken(user);
        res.status(200).json({ token });
      } else {
        res
          .status(404)
          .json({ error: true, msg: "Wrong username or password" });
      }
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong, try again please." });
  }
};
