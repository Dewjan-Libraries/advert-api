// import router
import { Router } from "express";
import { getProfile, getVendorAdverts, loginVendor, logoutVendor, registerVendor, updateProfile } from "../controllers/vendors.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";
import { vendorAvatarUpload } from "../middlewares/upload.js";

// create router
const vendorRouter = Router();

// define routes
vendorRouter.post("/vendors/register", registerVendor);

vendorRouter.post("/vendors/login", loginVendor);

vendorRouter.get("/vendors/me", isAuthenticated, hasPermission("getProfile"), getProfile);

vendorRouter.get("/vendors/me/adverts", isAuthenticated, hasPermission('getAdverts'), getVendorAdverts)

vendorRouter.post("/vendors/logout", logoutVendor);

vendorRouter.patch("/vendors/me", isAuthenticated, hasPermission("updateProfile"), vendorAvatarUpload.single("avatar"), updateProfile)

export default vendorRouter;