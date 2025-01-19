import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo DB connected at host ${mongoose.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};

connectDB();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
