import { Router } from "express";
import {
  addAdverts,
  deleteAdvert,
  editAdvert,
  getAd,
  getAdverts,
} from "../controllers/adverts.js";

const advertRouter = Router();

advertRouter.post("/adverts", addAdverts);

advertRouter.get("/adverts", getAdverts);

advertRouter.get("/adverts/:id", getAd);

advertRouter.put("/adverts/:id", editAdvert);

advertRouter.delete("/adverts", deleteAdvert);

export default advertRouter;
