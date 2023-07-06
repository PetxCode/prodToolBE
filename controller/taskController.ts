import express, { Request, Response } from "express";
import taskModel from "../model/taskModel";

export const createTask = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { task, priority } = req.body;
    const tasked = await taskModel.create({ task, priority });

    return res.status(201).json({
      message: "Task has be created",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task cannot be created",
    });
  }
};

export const getTask = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const tasked = await taskModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Viewing all Task",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task cannot be Viewed",
    });
  }
};

export const getOneTask = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await taskModel.findById(id);

    return res.status(200).json({
      message: "Viewing Task",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task cannot be View",
    });
  }
};

export const updateOneTask = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await taskModel.findByIdAndUpdate(
      id,
      {
        isComplete: true,
      },
      { new: true },
    );

    return res.status(201).json({
      message: "Task updated",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task cannot be updated",
    });
  }
};

export const deleteOneTask = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await taskModel.findByIdAndDelete(id);

    return res.status(201).json({
      message: "Task deleted",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task cannot be delete",
    });
  }
};
