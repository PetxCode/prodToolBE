import express, { Application, Response, Request } from "express";
import mongoose from "mongoose";
import { mainApp } from "./mainApp";
import dotenv from "dotenv";
dotenv.config();
import { dbConnect } from "./config/db";

const realPort = parseInt(process.env.APPLICATION_PORT!);

const port: number = realPort;
const app: Application = express();

mainApp(app);

const server = app.listen(port, () => {
  console.log("");
  dbConnect();
  console.log("server is live 🚀");
});

process.on("uncaughtException", (error: any) => {
  console.log("server is shutting down dur to: uncaughtException ");

  console.log(error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("server is shutting down dur to: unhandledRejection ");

  console.log(reason);

  server.close(() => {
    process.exit(1);
  });
});
