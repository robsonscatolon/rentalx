import { Specification } from "../entities/Specification";

interface ICreateSpeficationsDTO {
    name: string;
    description: string;
}

interface ISpeficationsRepository {
    create({ name, description }: ICreateSpeficationsDTO): void
    findByName(name: string): Specification | undefined
}

export { ISpeficationsRepository, ICreateSpeficationsDTO }