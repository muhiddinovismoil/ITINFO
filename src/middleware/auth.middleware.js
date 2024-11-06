export const authMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next(error);
        } else {
            next();
        }
    };
};
