import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// connect to database

// create an express app
const app = express();

// use middlewares
app.use(express.json());

// use routes
app.use(cors());

// listen for incoming requests
app.listen(4000, () => {
  console.log("app is listening on port 4000");
});
