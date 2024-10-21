import Joi from "joi";

export const addAdvertValidator =Joi.object({
    title:Joi.string().required,
    category:Joi.string().required,
    condition:Joi.string().required,
    brandName:Joi.string().required,
    price:Joi.string().required,
    image:Joi.string().required,
    vendor:Joi.string().required,
    desription:Joi.string().required,
});