import { ISpeficationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string
}

class CreateSpecificationsUseCase {

    constructor(private specificationRepository: ISpeficationsRepository) { }

    execute({ name, description }: IRequest): void {

        const specification = this.specificationRepository.findByName(name)

        if (specification) {
            throw new Error("Specification already exists!")
        }

        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationsUseCase }