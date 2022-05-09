import { sign } from "jsonwebtoken";
import { Model } from "sequelize";
import dotenv from "dotenv";

export const createToken = (user: Model) => {
  dotenv.config();
  const secret = process.env.SECRET || "";
  const payload = {
    id: user.getDataValue("id"),
    username: user.getDataValue("username"),
    email: user.getDataValue("email"),
    role: user.getDataValue("role"),
  };

  return sign(payload, secret);
};
