import { Router } from "express";
import {
    addCategoryCon,
    getAllCategoryCon,
    getByIdCategoryCon,
    searchCategoryCon,
} from "../controllers/index.js";
import { categoryMiddleware } from "../middleware/index.js";
import { CategorySchema } from "../schema/index.js";
export const categoryRoutes = new Router();

categoryRoutes.get("/", categoryMiddleware(CategorySchema), getAllCategoryCon);
categoryRoutes.get("/:id", getByIdCategoryCon);
categoryRoutes.get("/search", searchCategoryCon);
categoryRoutes.post("/new", categoryMiddleware(CategorySchema), addCategoryCon);
// categoryRoutes.put("/:id");
// categoryRoutes.delete("/:id");
