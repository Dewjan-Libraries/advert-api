import { Router } from "express";
import {
  addAdverts,
  deleteAdvert,
  editAdvert,
  getAd,
  getAdverts,
} from "../controllers/adverts.js";

import { remoteUpload } from "../middlewares/upload.js"

const advertRouter = Router();

// protect post
advertRouter.post("/adverts", remoteUpload.single('image'), addAdverts);

advertRouter.get("/adverts", getAdverts);

advertRouter.get("/adverts/:id", getAd);

advertRouter.put("/adverts/:id", editAdvert);

advertRouter.delete("/adverts", deleteAdvert);

export default advertRouter;
