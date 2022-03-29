import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default (): ListCategoriesController => {
    const catetoryRepository = new CategoriesRepository();
    const listCategoriesUseCase = new ListCategoriesUseCase(catetoryRepository);

    const listCategoriesController = new ListCategoriesController(
        listCategoriesUseCase
    );

    return listCategoriesController;
};
