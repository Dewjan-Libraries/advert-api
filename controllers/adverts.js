import { AdvertModel } from "../models/adverts.js";
import { addAdvertValidator } from "../validators/adverts.js";

// post all
// get adverts
// get an adverrt
// put an advert
// delete an advert

export const addAdverts = async (req, res, next) => {
  try {
    const { error, value } = addAdvertValidator.validate({
      ...req.body,
      image: req.file?.filename,
    });
    // posting to the database
    const newAd = new AdvertModel(req.body);
    const savedAd = await newAd.save();
    res.status(201).json(savedAd);
  } catch (error) {
    next(error);
  }
};

export const getAdverts = async (req, res, next) => {
  try {
    const { filter = "{}", limit = 10, skip = 0 } = req.query;
    // fetching advert from the database
    const adverts = await AdvertModel.find(JSON.parse(filter))
      .populate("vendor")
      .limit(limit)
      .skip(skip);
    // return response
    res.status(201).json(adverts);
  } catch (error) {
    next(error);
  }
};

export const getAd = async (req, res, next) => {
  try {
    // fetching a book from the database
    const advert = await AdvertModel.findById(req.params.id);
    res.status(201).json(advert);
  } catch (error) {
    next(error);
  }
};

export const editAdvert = async (req, res, next) => {
  try {
    const edit = await AdvertModel.findByIdAndUpdate(req.params.id, req.body);

    res.status(201).json(edit);
  } catch (error) {
    next(error);
  }
};

export const deleteAdvert = async (req, res, next) => {
  try {
    const deleteAd = await AdvertModel.findByIdAndDelete(
      req.params.id,
      req.body
    );

    res.status(201).json(deleteAd);
  } catch (error) {
    next(error);
  }
};
