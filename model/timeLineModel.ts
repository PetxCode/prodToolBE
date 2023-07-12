import mongoose from "mongoose";

interface iTask {
  task?: string;
  priority?: string;
  isComplete?: boolean;
}

interface iTimeData extends iTask, mongoose.Document {}

const timeLineModel = new mongoose.Schema(
  {
    task: {
      type: String,
      trim: true,
    },
    priority: {
      type: String,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model<iTimeData>("timeLines", timeLineModel);
