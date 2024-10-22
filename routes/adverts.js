import { Router } from "express";
import {
  addAdverts,
  deleteAdvert,
  editAdvert,
  getAd,
  getAdverts
} from "../controllers/adverts.js";

import { remoteUpload } from "../middlewares/upload.js"
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";

const advertRouter = Router();

// protect post

advertRouter.post("/adverts", isAuthenticated, hasPermission('addAdverts'), remoteUpload.single('image'), addAdverts);

advertRouter.get("/adverts", getAdverts);

advertRouter.get("/adverts/:id", getAd);

advertRouter.patch("/adverts/:id", isAuthenticated, editAdvert);

advertRouter.delete("/adverts/:id", isAuthenticated, deleteAdvert);

export default advertRouter;
