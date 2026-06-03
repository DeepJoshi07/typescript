import type { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";

interface IResponse {
  message: string;
  data?: any;
}

export  const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    const data = jwt.verify(
      token as string,
      process.env.JWT_SECRET as Secret,
    ) as { id: string; role: string };

    req.id = data.id;
    req.role = data.role;

    next();
  } catch (error: any) {
    console.log("Internal server error(middleware)", error.message);
    return res.status(500).json({
      message: "Internal server Error!",
    } as IResponse);
  }
};
