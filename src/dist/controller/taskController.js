"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneTask = exports.updateOneTask = exports.getOneTask = exports.getTask = exports.createTask = void 0;
const taskModel_1 = __importDefault(require("../model/taskModel"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority } = req.body;
        const tasked = yield taskModel_1.default.create({ task, priority });
        return res.status(201).json({
            message: "Task has be created",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Task cannot be created",
        });
    }
});
exports.createTask = createTask;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasked = yield taskModel_1.default.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Viewing all Task",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Task cannot be Viewed",
        });
    }
});
exports.getTask = getTask;
const getOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield taskModel_1.default.findById(id);
        return res.status(200).json({
            message: "Viewing Task",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Task cannot be View",
        });
    }
});
exports.getOneTask = getOneTask;
const updateOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield taskModel_1.default.findByIdAndUpdate(id, {
            isComplete: true,
        }, { new: true });
        return res.status(201).json({
            message: "Task updated",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Task cannot be updated",
        });
    }
});
exports.updateOneTask = updateOneTask;
const deleteOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield taskModel_1.default.findByIdAndDelete(id);
        return res.status(201).json({
            message: "Task deleted",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Task cannot be delete",
        });
    }
});
exports.deleteOneTask = deleteOneTask;
