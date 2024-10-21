import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import vendorRouter from "./routes/vendors.js";
import advertRouter from "./routes/adverts.js";

// connect to database
await mongoose.connect(process.env.MONGO_URI);
// create an express app
const app = express();

// use middlewares
app.use(express.json());

// use routes
app.use(cors());
app.use(vendorRouter);
app.use(advertRouter);

// listen for incoming requests
app.listen(4000, () => {
  console.log("app is listening on port 4000");
});
