import { VendorModel, AdvertModel } from "../models/vendors.js";
import pkg from "bcryptjs"
const { hashSync, compareSync } = pkg;
import jwt from 'jsonwebtoken'
import { loginVendorValidator, registerVendorValidator, updateVendorValidator } from "../validators/vendors.js";


// register vendor controller
export const registerVendor = async (req, res, next) => {
    try {
        // validate vendor input
        const { error, value } = registerVendorValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // check if vendor exist
        const vendor = await VendorModel.findOne({ email: value.email });
        if (vendor) {
            return res.status(409).json("User already exist!")
        }
        // hash their password
        const hashPassword = hashSync(value.password, 10);
        // save user to database
        await VendorModel.create({
            ...value,
            password: hashPassword
        })
        // send confirmation email
        // respond to request
        res.json('User Registered Successfully')
    } catch (error) {
        next(error)
    }


};

export const loginVendor = async (req, res, next) => {
    try {
        // validate vendor input
        const { error, value } = loginVendorValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // find one vendor with identifier
        const vendor = await VendorModel.findOne({ email: value.email });
        if (!vendor) {
            return res.status(404).json('Invalid Credentials');
        }
        // compare passwords
        const correctPassword = compareSync(value.password, vendor.password);
        if (!correctPassword) {
            return res.status(401).json('Invalid Credentials')
        }
        // sign a token for vendor
        const token = jwt.sign(
            { id: vendor.id },
            process.env.JWT_PRIVATE_KEY,
            { expiresIn: '24h' }
        );
        // respond to request
        res.status(200).json({
            message: "User Loggedin Successfully",
            accessToken: token
        })
    } catch (error) {
        next(error)
    }

}

export const getProfile = async (req, res, next) => {
    try {
        // find authenticated user from database
        const vendor = await VendorModel
            .findById(req.auth.id)
            .select({ password: false })
            // respond to request
            res.json(vendor);
    } catch (error) {
        next(error)
    }
}

export const logoutVendor = (req, res, next) => {
    res.json('Vendor successfully logged out')
};

export const updateProfile = (req, res, next) => {
    try {
        const {error, value} = updateVendorValidator.validate(req.body);
        if(error) {
            return res.status(422).json(error)
        }
        res.json("Profile Updated Successfully")
    } catch (error) {
        next(error)
    }
};

export const getVendorAdverts = async (req, res, next) => {
    try {
      const { filter = "{}", sort = "{}", limit = 20, skip = 0 } = req.query;
      // fetching advert from the database
      const adverts = await AdvertModel.find({
        ...JSON.parse(filter),
        vendor: req.auth.id
      })
        .sort(JSON.parse(sort))
        .limit(limit)
        .skip(skip);
  
      res.status(201).json(adverts);
    } catch (error) {
      next(error);
    }
  };
  