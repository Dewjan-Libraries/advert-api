import Joi from "joi";

export const registerVendorValidator = Joi.object({
    firstName: Joi.string().required(),
    middleName: Joi.string().optional(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid('vendor')
});

export const loginVendorValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const updateVendorAvatar = Joi.object({
    firstName: Joi.string(),
    middleName: Joi.string(),
    lastName: Joi.string(),
    avatar: Joi.string()
})