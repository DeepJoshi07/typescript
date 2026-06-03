import type { Request, Response } from "express";
import { User } from "../models/user";
import { IUser } from "../models/user";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";

interface IResponse {
  data?: any;
  message: string;
}
export const signup = async (req: Request, res: Response) => {
  const { name, email, username, password, phone, role } = req.body;
  try {
    if (!name || !email || !phone || !username || !password || !role) {
      return res.status(400).json({
        message: "please provide all the feilds",
      } as IResponse);
    }

    const user: IUser | null = await User.findOne({ email });

    if (user) {
      return res
        .status(404)
        .json({ message: "user already exists!" } as IResponse);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      username,
      password: hashPassword,
      phone,
      role,
    });

    return res.status(201).json({
      message: "User created",
      user: {
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        name: newUser.name,
      },
    } as IResponse);
  } catch (error: any) {
    console.log("Internal server error", error.message);
    return res.status(500).json({
      message: "Internal server Error!",
    } as IResponse);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "please provide all the feilds",
      } as IResponse);
    }

    const user: IUser | null = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "user does exists!" } as IResponse);
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(400).json({ message: "Wrong password" } as IResponse);
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET as Secret,
      {
        expiresIn: "1hr",
      },
    );

    return res.status(200).json({
      message: "User logged in",
      user: {
        username: user.username,
        email: user.email,
        role: user.role,
        name: user.name,
      },
      token,
    } as IResponse);
  } catch (error: any) {
    console.log("Internal server error", error.message);
    return res.status(500).json({
      message: "Internal server Error!",
    } as IResponse);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    console.log("Internal server error", error.message);
    return res.status(500).json({
      message: "Internal server Error!",
    } as IResponse);
  }
};
