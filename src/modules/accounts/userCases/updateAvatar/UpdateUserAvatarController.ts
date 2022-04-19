import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {

    async handle(request: Request, response: Response) {
        const { id } = request.user;
        const { file } = request;

        if(!file){
            throw new AppError("Avatar not found")
        }

        const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

        updateUserAvatarUseCase.execute(id, file.filename)

        return response.status(204).send()
    }

}

export { UpdateUserAvatarController }