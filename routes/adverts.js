import { Router } from "express";
import {
  addAdverts,
  countAdverts,
  deleteAdvert,
  editAdvert,
  getAd,
  getAdverts
} from "../controllers/adverts.js";

import { remoteUpload } from "../middlewares/upload.js"
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";

const advertRouter = Router();

// protect post

advertRouter.get("/adverts/count", countAdverts);

advertRouter.post("/adverts", isAuthenticated, hasPermission('addAdverts'), remoteUpload.single('image'), addAdverts);

advertRouter.get("/adverts", getAdverts);

advertRouter.get("/adverts/:id", getAd);

advertRouter.patch("/adverts/:id", isAuthenticated, hasPermission('updateAdverts'),editAdvert);

advertRouter.delete("/adverts/:id", isAuthenticated, hasPermission('deleteAdverts'), deleteAdvert);

export default advertRouter;
