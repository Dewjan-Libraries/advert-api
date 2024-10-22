import Joi from "joi";


export const addAdvertValidator = Joi.object({
  title: Joi.string().required,
  category: Joi.string().required,
  condition: Joi.string().required,
  brandName: Joi.string().required,
  price: Joi.string().required,
  image: Joi.string().required,
  description: Joi.string().required,
});

export const updateAdvertValidator = Joi.object({
  title: Joi.string(),
  category: Joi.string(),
  condition: Joi.string(),
  brandName: Joi.string(),
  price: Joi.string(),
  image: Joi.string(),
  description: Joi.string(),
});
