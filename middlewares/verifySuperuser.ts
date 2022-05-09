import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

export const verifySuperuser = (
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
    const role = Number(Object(decode).role);
    if (role !== 1) {
      return res.status(403).json({ error: true, msg: "Unauthorized" });
    }
    next();
  });
};
