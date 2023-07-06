import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongooseString: string = process.env.APPLICATION_DB!;

export const dbConnect = () => {
  mongoose.connect(mongooseString).then(() => {
    console.log("connected");
  });
};
