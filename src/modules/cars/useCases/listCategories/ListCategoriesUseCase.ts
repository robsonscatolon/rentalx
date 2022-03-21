import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    list(): Category[] {
        const all = this.categoriesRepository.list()
        return all;
    }
}

export { ListCategoriesUseCase }