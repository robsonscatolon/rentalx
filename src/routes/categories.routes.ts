import { response, Router } from "express";
import multer from "multer";
import {CreateCategoryController} from "../modules/cars/useCases/createCategory/CreateCategoryController";
import importCategoryController from "../modules/cars/useCases/importCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", async (request, response) => {
    return listCategoriesController().handle(request, response);
});

categoriesRoutes.post(
    "/import",
    upload.single("file"),
    async (request, response) => {
        return await importCategoryController().handle(request, response);
    }
);

export { categoriesRoutes };
