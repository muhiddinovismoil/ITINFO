import { User } from "../models/index.js";
import { createTokens } from "../helpers/jwt.js";
export const authRegisterCon = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.send("Email already taken");
        }

        req.body.full_name = req.body.fullName;

        const user = new User(req.body);

        await user.save();
        res.send({
            message: "loggedIn",
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

export const authLoginCon = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select({
            full_name: 1,
            email: 1,
            password: 1,
            role: 1,
        });
        if (!user) return res.send("user not found!");
        if (user.password !== password)
            return res.send("Email or password is not valid");
        const token = createTokens({
            full_name: user.full_name,
            email: user.email,
            role: user.role,
        });
        res.send({
            message: "loggedIn",
            data: token,
        });
    } catch (error) {
        next(error);
    }
};
