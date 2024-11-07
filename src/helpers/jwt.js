import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const createTokens = (payload) => {
    const access_token = jwt.sign(payload, process.env.ACCESS_KEY, {
        expiresIn: process.env.ACCESS_TIME,
    });
    const refresh_token = jwt.sign(payload, process.env.REFRESH_KEY, {
        expiresIn: process.env.REFRESH_TIME,
    });
    return {
        access_token,
        refresh_token,
    };
};

const verifyToken = (type, token) => {
    try {
        const data = jwt.verify(
            token,
            type === "access" ? process.env.ACCESS_KEY : process.env.REFRESH_KEY
        );
        return { decode: data, error: null };
    } catch (error) {
        return { decode: null, error };
    }
};

export { createTokens, verifyToken };
