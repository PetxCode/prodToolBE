"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const doneTaskController_1 = require("../controller/doneTaskController");
const router = (0, express_1.Router)();
router.route("/").get(doneTaskController_1.getTask).post(doneTaskController_1.createTask);
router.route("/:id").get(doneTaskController_1.getOneTask).patch(doneTaskController_1.updateOneTask).delete(doneTaskController_1.deleteOneTask);
exports.default = router;
