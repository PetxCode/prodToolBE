"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainApp_1 = require("./mainApp");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_1 = require("./config/db");
const realPort = parseInt(process.env.APPLICATION_PORT);
const port = realPort;
const app = (0, express_1.default)();
(0, mainApp_1.mainApp)(app);
const server = app.listen(process.env.PORT || port, () => {
    console.log("");
    (0, db_1.dbConnect)();
    console.log("server is live 🚀");
});
process.on("uncaughtException", (error) => {
    console.log("server is shutting down dur to: uncaughtException ");
    console.log(error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("server is shutting down dur to: unhandledRejection ");
    console.log(reason);
    server.close(() => {
        process.exit(1);
    });
});
