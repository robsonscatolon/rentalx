import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        if (!file) {
            throw new AppError("File not found");
        }

        const importCategoryUseCase = container.resolve(ImportCategoryUseCase)
        await importCategoryUseCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController };
