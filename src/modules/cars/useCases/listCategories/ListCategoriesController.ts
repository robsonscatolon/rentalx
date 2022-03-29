import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {

    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {

        const all = await this.listCategoriesUseCase.list()

        return response.json(all);
    }
}

export { ListCategoriesController }