import { Router } from "express";
import {
    addCategoryCon,
    deleteCategoryCon,
    getAllCategoryCon,
    getByIdCategoryCon,
    sortCategoryCon,
    updateCategoryCon,
} from "../controllers/index.js";
import { categoryMiddleware } from "../middleware/index.js";
import { CategorySchema } from "../schema/index.js";
export const categoryRoutes = new Router();

categoryRoutes.get("/", getAllCategoryCon);
categoryRoutes.get("/sort", sortCategoryCon);
categoryRoutes.get("/:id", getByIdCategoryCon);
categoryRoutes.post("/new", categoryMiddleware(CategorySchema), addCategoryCon);
categoryRoutes.put(
    "/:id",
    categoryMiddleware(CategorySchema),
    updateCategoryCon
);
categoryRoutes.delete(
    "/:id",
    deleteCategoryCon
);
