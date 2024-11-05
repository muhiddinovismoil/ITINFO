import Joi from "joi";

export const RegisterSchema = Joi.object({
    fullName: Joi.string().optional(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
});
