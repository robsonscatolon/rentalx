import { inject, injectable } from "tsyringe";
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
            throw new Error("Specification already exists!")
        }

        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationsUseCase }