import Joi from "joi";

export const CategorySchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(), // Make it required if necessary
});
