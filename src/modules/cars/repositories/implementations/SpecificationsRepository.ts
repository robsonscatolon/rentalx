import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ICreateSpeficationsDTO, ISpeficationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpeficationsRepository {

    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification)
    }

    async findByName(name: string): Promise<Specification | undefined> {
        const specification = await this.repository.findOne({ where: { name: name } })

        return specification;
    }

    async create({ name, description }: ICreateSpeficationsDTO): Promise<void> {
        const specification = this.repository.create({ name, description });

        await this.repository.save(specification)
    }



}

export { SpecificationsRepository }