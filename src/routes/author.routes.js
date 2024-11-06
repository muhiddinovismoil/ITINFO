import { Router } from "express";
import {
    getAllAuthors,
    getByIdAuthors,
    sortAllAuthors,
    deleteAuthor,
    updateAuthor,
} from "../controllers/index.js";
export const authorRoutes = new Router();
authorRoutes.get("/", getAllAuthors);
authorRoutes.get("/:id", getByIdAuthors);
authorRoutes.get("/sort", sortAllAuthors);
authorRoutes.put("/:id", updateAuthor);
authorRoutes.delete("/:id", deleteAuthor);
