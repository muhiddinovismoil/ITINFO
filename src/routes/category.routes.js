import { Router } from "express";
import {
    addCategoryCon,
    deleteCategoryCon,
    getAllCategoryCon,
    getByIdCategoryCon,
    sortCategoryCon,
    updateCategoryCon,
} from "../controllers/index.js";
import {
    categoryMiddleware,
    checkAdmin,
    checkSupperAdmin,
    checkUser,
} from "../middleware/index.js";
import { CategorySchema } from "../schema/index.js";
export const categoryRoutes = new Router();

categoryRoutes.get("/", checkUser, getAllCategoryCon);
categoryRoutes.get("/sort", checkUser, sortCategoryCon);
categoryRoutes.get("/:id", checkUser, getByIdCategoryCon);
categoryRoutes.post(
    "/new",
    checkAdmin,
    categoryMiddleware(CategorySchema),
    addCategoryCon
);
categoryRoutes.put(
    "/:id",
    checkAdmin,
    categoryMiddleware(CategorySchema),
    updateCategoryCon
);
categoryRoutes.delete("/:id", checkSupperAdmin, deleteCategoryCon);
