import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.get("/", (req, res) => res.send("HELLO FROM GYMBOSS"));

const PORT = process.env.PORT || 5001;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
