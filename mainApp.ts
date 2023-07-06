import express, { Application } from "express";
import cors from "cors";
import task from "./router/taskRouter";
import done from "./router/doneTaskRouter";

export const mainApp = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use("/api/v1/task", task)
    .use("/api/v1/done", done);
};
