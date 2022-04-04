import { Specification } from "../entities/Specification";

interface ICreateSpeficationsDTO {
    name: string;
    description: string;
}

interface ISpeficationsRepository {
    create({ name, description }: ICreateSpeficationsDTO): Promise<void> 
    findByName(name: string): Promise<Specification | undefined>
}

export { ISpeficationsRepository, ICreateSpeficationsDTO }