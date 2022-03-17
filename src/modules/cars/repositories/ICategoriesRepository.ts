import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string
}

interface ICategoriesRepository {

    findByName(name: String):Category|undefined;

    list(): Category[];

    create({ name, description }: ICreateCategoryDTO): void;

}

export { ICategoriesRepository, ICreateCategoryDTO }