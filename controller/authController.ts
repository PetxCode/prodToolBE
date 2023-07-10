import express, { Request, Response } from "express";
import authModel from "../model/authModel";
import bcrypt from "bcrypt";

export const readUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const user = await authModel.find();

    return res.status(200).json({
      message: "Get all Users",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const readOneUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { id } = req.params;
    const user = await authModel.findById(id);

    return res.status(200).json({
      message: "Get One Users",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateOneUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { id } = req.params;
    const { userName, avatar } = req.body;
    const user = await authModel.findByIdAndUpdate(
      id,
      { userName, avatar },
      { new: true },
    );

    return res.status(201).json({
      message: "Account Updated",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteOneUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { id } = req.params;
    const user = await authModel.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Account Deleted",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const createAccount = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { userName, avatar, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await authModel.create({
      email,
      password: hash,
      userName,
      avatar,
    });

    return res.status(201).json({
      message: "Account Created",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const signInAccount = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const user = await authModel.findOne({ email });

    if (user) {
      const passed = await bcrypt.compare(password, user.password!);

      if (passed) {
        return res.status(201).json({
          message: `Welcome back ${user.userName},`,
          data: user._id,
        });
      } else {
        return res.status(404).json({
          message: "Password is incorrect",
        });
      }
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
