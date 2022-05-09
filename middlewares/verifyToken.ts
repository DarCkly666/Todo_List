import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const secret = process.env.SECRET || "";
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ error: true, msg: "Unauthorized" });
  }
  verify(token, secret, (error, decode) => {
    if (error) {
      return res.status(403).json({ error: true, msg: "Invalid token" });
    }
    console.log(decode);
    next();
  });
};
