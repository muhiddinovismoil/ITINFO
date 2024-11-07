import { Router } from "express";
import {
    getAllAuthors,
    getByIdAuthors,
    sortAllAuthors,
    deleteAuthor,
    updateAuthor,
} from "../controllers/index.js";
import {
    checkAdmin,
    checkSupperAdmin,
    checkUser,
} from "../middleware/index.js";
export const authorRoutes = new Router();
authorRoutes.get("/", checkUser, getAllAuthors);
authorRoutes.get("/:id", checkUser, getByIdAuthors);
authorRoutes.get("/sort", checkUser, sortAllAuthors);
authorRoutes.put("/:id", checkAdmin, updateAuthor);
authorRoutes.delete("/:id", checkSupperAdmin, deleteAuthor);
