import { Category } from "../models/index.js";

export const getAllCategoryCon = async (req, res, next) => {
    try {
        const categoryData = await Category.find();
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
export const searchCategoryCon = async (req, res, next) => {
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
export const addCategoryCon = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const categoryData = await Category.findOne({ title });
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
