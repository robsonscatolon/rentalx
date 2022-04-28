import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemor";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoriesRepositoryInMemory

describe("Create category", () => {

    beforeEach(() => {
        categoryRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory)
    })

    it("should be able to create a new category", async () => {

        const newCategory = {
            name: "New category",
            description: "Description of new category"
        }

        await createCategoryUseCase.execute({ name: newCategory.name, description: newCategory.description })

        const createdCategory = await categoryRepositoryInMemory.findByName(newCategory.name)

        expect(createdCategory).toHaveProperty("id")

    })

    it("shoul not be able to create a new category with name exists", async () => {
        expect(
            async () => {
                const newCategory = {
                    name: "New category",
                    description: "Description of new category"
                }

                await createCategoryUseCase.execute({ name: newCategory.name, description: newCategory.description })

                await createCategoryUseCase.execute({ name: newCategory.name, description: newCategory.description })
            }
        ).rejects.toBeInstanceOf(AppError)

    })
})