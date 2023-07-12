"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timeLineController_1 = require("../controller/timeLineController");
const router = (0, express_1.Router)();
router.route("/").get(timeLineController_1.getTask).post(timeLineController_1.createTask);
router.route("/:id").get(timeLineController_1.getOneTask).patch(timeLineController_1.updateOneTask).delete(timeLineController_1.deleteOneTask);
exports.default = router;
