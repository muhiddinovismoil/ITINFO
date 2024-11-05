import Joi from "joi";

export const authMiddleware = (schema) => {
    return (req, res, next) => {
        const { error, email, password } = schema.validate(req.body);
        if (error) {
            next(error);
        } else {
            next();
        }
    };
};
