import { verifyToken } from "../helpers/jwt.js";

export function checkUser(req, res, next) {
    const token = req.headers?.authorization?.split(" ")?.[1];
    const { error, decode } = verifyToken("access", token);
    if (error) {
        return res.status(401).send(error);
    }
    req.user = decode;
    next();
}

export function checkSupperAdmin(req, res, next) {
    let userRole = ["superadmin"];
    const token = req.headers?.authorization?.split(" ")?.[1];
    const { error, decode } = verifyToken("access", token);
    if (error) {
        return res.status(401).send(error);
    }
    console.log(decode);
    if (!userRole.includes(decode.role)) {
        return res.status(409).send({
            message: "Super Admin emasiz bundan uzur soraymiz",
        });
    }
    req.user = decode;
    next();
}

export function checkAdmin(req, res, next) {
    const userRole = ["admin", "superadmin"];
    const token = req.headers?.authorization?.split(" ")?.[1];
    const { error, decode } = verifyToken("access", token);
    if (error) {
        return res.status(401).send(error);
    }
    console.log(decode)
    if (!userRole.includes(decode.role)) {
        return res.status(409).send({
            messege:
                "Supper Admin va Admin xuquqi yoq bolishi mumkin bundan uzur soraymiz",
        });
    }
    req.user = decode;

    next();
}
