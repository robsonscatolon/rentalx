import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository) { }

    async list(): Promise<Category[]> {
        const all = await this.categoriesRepository.list();

        return all;
    }
}

export { ListCategoriesUseCase };
