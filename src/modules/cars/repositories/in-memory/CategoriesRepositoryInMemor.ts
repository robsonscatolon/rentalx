import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {

    private categories: Category[] = [];

    async findByName(name: String): Promise<Category | undefined> {

        const category = this.categories.find(c => c.name === name)

        return category;
    }

    async list(): Promise<Category[]> {
        const list = this.categories;

        return list;
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category()

        Object.assign(category, { name, description })

        this.categories.push(category)
    }
}

export { CategoriesRepositoryInMemory }