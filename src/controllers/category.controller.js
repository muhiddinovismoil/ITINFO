import { Category } from "../models/index.js";

export const getAllCategoryCon = async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        const skip = (page - 1) * limit;
        const categoryData = await Category.find().skip(skip).limit(limit);
        res.send({
            message: "Success",
            data: categoryData,
        });
    } catch (error) {
        next(error);
    }
};
export const getByIdCategoryCon = async (req, res, next) => {
    try {
        const id = req.params.id;
        const categoryData = await Category.findById(id);
        res.send({
            message: "Success",
            data: categoryData,
        });
    } catch (error) {
        next(error);
    }
};
export const sortCategoryCon = async (req, res, next) => {
    try {
        const sortField = req.query.sortField || "title";
        const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;
        const categories = await Category.find().sort({
            [sortField]: sortOrder,
        });
        res.send({
            message: "Sorted",
            data: categories,
        });
    } catch (error) {
        next(error);
    }
};

export const addCategoryCon = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const categoryData = await Category.findOne({ title }).select({
            title: 1,
            description: 1,
        });
        if (categoryData) {
            return res.send("Category already created");
        }
        const category = new Category(req.body);
        await category.save();
        res.send({
            message: "Category Created",
            data: category,
        });
    } catch (error) {
        next(error);
    }
};
export const deleteCategoryCon = async (req, res, next) => {
    try {
        const id = req.params.id;
        const categoryData = await Category.findById(id).select({
            title: 1,
            description: 1,
        });
        if (!categoryData) {
            return res.send("Not found or maybe it deleted before");
        }
        await Category.findByIdAndDelete(id);
        res.send({
            message: "Category Deleted",
            category: categoryData,
        });
    } catch (error) {
        next(error);
    }
};
export const updateCategoryCon = async (req, res, next) => {
    try {
        const id = req.params.id;
        const categoryData = await Category.findById(id).select({
            title: 1,
            description: 1,
        });
        if (!categoryData) {
            return res
                .status(404)
                .send("Not found or maybe it was deleted before");
        }
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.send({
            message: "Category Updated",
            category: updatedCategory,
        });
    } catch (error) {
        next(error);
    }
};
