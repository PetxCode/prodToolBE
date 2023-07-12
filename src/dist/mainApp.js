"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const taskRouter_1 = __importDefault(require("./router/taskRouter"));
const doneTaskRouter_1 = __importDefault(require("./router/doneTaskRouter"));
const authRouter_1 = __importDefault(require("./router/authRouter"));
const timeLineRouter_1 = __importDefault(require("./router/timeLineRouter"));
const mainApp = (app) => {
    app
        .use(express_1.default.json())
        .use((0, cors_1.default)())
        .use("/api/v1/task", taskRouter_1.default)
        .use("/api/v1/done", doneTaskRouter_1.default)
        .use("/api/v1/auth", authRouter_1.default)
        .use("/api/v1/time-line", timeLineRouter_1.default);
};
exports.mainApp = mainApp;
