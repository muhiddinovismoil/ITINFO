import { verifyToken } from "../helpers/jwt.js";

export function checkUser(req, res, next) {
    const token = req.headers?.authorization?.split(" ")?.[1];
    const { error, decode } = verifyToken("access", token);
    req.user = decode;

    next();
}

export function checkSupperAdmin(req, res, next) {
    var userRole = { isSuperAdmin: true };
    const token = req.headers?.authorization?.split(" ")?.[1];

    const { error, decode } = verifyToken("access", token);

    if (!decode || decode.isSuperAdmin != userRole.isSuperAdmin) {
        return res.status(409).send({
            message: "Super Admin emasiz bundan uzur soraymiz",
        });
    }

    req.user = decode;
    next();
}

export function checkAdmin(req, res, next) {
    const userRole = {
        isSuperAdmin: true,
        isAdmin: true,
    };
    const token = req.headers?.authorization?.split(" ")?.[1];
    const { error, decode } = verifyToken("access", token);
    console.log(decode);
    if (
        !decode ||
        decode?.isSuperAdmin != userRole.isSuperAdmin ||
        decode?.isAdmin != userRole.isAdmin
    ) {
        return res.status(409).send({
            messege:
                "Supper Admin va Admin xuquqi yoq bolishi mumkin bundan uzur soraymiz",
        });
    }
    req.user = decode;

    next();
}
