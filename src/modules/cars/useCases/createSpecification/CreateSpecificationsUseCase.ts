import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ISpeficationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string
}

@injectable()
class CreateSpecificationsUseCase {

    constructor(
        @inject("SpecificationsRepository")
        private specificationRepository: ISpeficationsRepository) { }

    async execute({ name, description }: IRequest): Promise<void> {

        const specification = await this.specificationRepository.findByName(name)

        if (specification) {
            throw new AppError("Specification already exists!")
        }

        await this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationsUseCase }