import { response, Router } from "express"
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoriesService } from "../services/CreateCategoriesService";


const categoriesRoutes = Router();
const repository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {

    const { name, description } = request.body;

    const createCategoriesService = new CreateCategoriesService(repository);
    createCategoriesService.execute({ name, description })

    return response.status(201).send();
})


categoriesRoutes.get("/", (request, response) => {

    const categories = repository.list();

    return response.json(categories)
})

export { categoriesRoutes }