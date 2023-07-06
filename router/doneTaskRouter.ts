import express, { Router } from "express";
import {
  deleteOneTask,
  createTask,
  getOneTask,
  getTask,
  updateOneTask,
} from "../controller/doneTaskController";

const router = Router();

router.route("/").get(getTask).post(createTask);

router.route("/:id").get(getOneTask).patch(updateOneTask).delete(deleteOneTask);

export default router;
