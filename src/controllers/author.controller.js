import { User } from "../models/index.js";
export const getAllAuthors = async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        const skip = (page - 1) * limit;
        const authors = await User.find().skip(skip).limit(limit);
        res.send({
            message: "Success",
            data: authors,
        });
    } catch (error) {
        next(error);
    }
};

export const getByIdAuthors = async (req, res, next) => {
    try {
        const id = req.params.id;
        const authors = await User.findById(id);
        res.send({
            message: "Success",
            data: authors,
        });
    } catch (error) {
        next(error);
    }
};
export const sortAllAuthors = async (req, res, next) => {
    try {
        const sortField = req.query.sortField || "createdAt";
        const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;
        const authors = await User.find().sort({
            [sortField]: sortOrder,
        });
        res.send({
            message: "Sorted",
            data: authors,
        });
    } catch (error) {
        next(error);
    }
};
export const updateAuthor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const authors = await User.findByIdAndUpdate(id, req.body);
        res.send({
            message: "Updated",
            data: authors,
        });
    } catch (error) {
        next(error);
    }
};
export const deleteAuthor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const authors = await User.findByIdAndDelete(id);
        res.send({
            message: "Deleted",
            data: authors,
        });
    } catch (error) {
        next(error);
    }
};
