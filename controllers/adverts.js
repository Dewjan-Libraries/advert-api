import { AdvertModel } from "../models/adverts.js";
import {
  addAdvertValidator,
  updateAdvertValidator,
} from "../validators/adverts.js";

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
    if (error) return res.status(422).json(error);
    // posting to the database
    await AdvertModel.create({
      ...value,
      vendor: req.auth.id
    });
    // const savedAd = await newAd.save();
    res.status(201).json("adverts added successfully");
  } catch (error) {
    next(error);
  }
};

// ...vendor: req.auth.id

export const getAdverts = async (req, res, next) => {
  try {
    const { filter = "{}", sort = "{}", limit = 20, skip = 0 } = req.query;
    // fetching advert from the database
    const adverts = await AdvertModel.find(JSON.parse(filter))
      .sort(JSON.parse(sort))
      .limit(limit)
      .skip(skip);

    res.status(201).json(adverts);
  } catch (error) {
    next(error);
  }
};

export const getAd = async (req, res, next) => {
  try {
    // fetching a book from the database
    const advert = await AdvertModel.findById(req.params.id);

    if (!advert) {
      return res.status(404).json("Advert not found");
    }
    res.status(201).json(advert);
  } catch (error) {
    next(error);
  }
};

export const editAdvert = async (req, res, next) => {
  try {
    // validate updated advert
    const { error, value } = updateAdvertValidator.validate(req.body);

    if (error) {
      return res.status(422).json(error);
    }

    const edit = await AdvertModel.findOneAndUpdate(
      {
        // before an update, login details should match
        _id: req.params.id,
        vendor: req.auth.id,
      },
      value,
      { new: true }
    );
    if (!edit) {
      return res.status(404).json("Ad not found");
    }
    res.status(201).json(edit);
  } catch (error) {
    next(error);
  }
};

export const deleteAdvert = async (req, res, next) => {
  try {
    const deleteAd = await AdvertModel.findOneAndDelete({
      _id: req.params.id,
      vendor: req.auth.id,
    });
    if (!deleteAd) {
      return res.status(422).json("Advert not found");
    }
    res.status(201).json("Advert deleted");
  } catch (error) {
    next(error);
  }
};

export const countAdverts = async (req,res,next) => {
  try {
    const { filter = "{}" } = req.query;
    // count adverts in database
    const count = await AdvertModel.countDocuments(JSON.parse(filter));

    // respond to request
    res.json({count});
  } catch (error) {
    next(error)
  }
}
