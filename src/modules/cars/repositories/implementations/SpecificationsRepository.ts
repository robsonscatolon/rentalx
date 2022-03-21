import { Specification } from "../../models/Specification";
import { ICreateSpeficationsDTO, ISpeficationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpeficationsRepository {
    private specifications: Specification[] = [];

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find(specfication => specfication.name === name)

        return specification
    }

    create({ name, description }: ICreateSpeficationsDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specification)
    }



}

export { SpecificationsRepository }