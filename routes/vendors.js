// import router
import { Router } from "express";
import { loginVendor, registerVendor } from "../controllers/vendors.js";

// create router
const vendorRouter = Router();

// define routes
vendorRouter.post("/vendors/register", registerVendor);

vendorRouter.post("/vendors/login", loginVendor);

export default vendorRouter;