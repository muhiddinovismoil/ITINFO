import Joi from "joi";

export const CategorySchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
});
