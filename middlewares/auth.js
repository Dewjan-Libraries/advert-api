import { expressjwt } from "express-jwt";
import { VendorModel } from "../models/vendors.js";

export const isAuthenticated = expressjwt({
    secret: process.env.JWT_PRIVATE_KEY,
    algorithms: ["HS256"]
});
 
