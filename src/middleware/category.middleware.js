import Joi from "joi";

export const categoryMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next(error);
        } else {
            next();
        }
    };
};
