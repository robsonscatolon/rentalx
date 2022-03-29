import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async list(): Promise<Category[]> {
        const all = await this.categoriesRepository.list();

        return all;
    }
}

export { ListCategoriesUseCase };
