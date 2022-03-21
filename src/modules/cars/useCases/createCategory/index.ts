import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const createCategoriesRepository = CategoriesRepository.getInstance();
const createCategoriesUseCase = new CreateCategoryUseCase(createCategoriesRepository)

const createCategoryController = new CreateCategoryController(createCategoriesUseCase)

export { createCategoryController }