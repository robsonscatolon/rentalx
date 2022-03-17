
interface ICreateSpeficationsDTO {
    name: string;
    description: string;
}
interface ISpeficationsRepository {
    create({ name, description }: ICreateSpeficationsDTO): void
}

export { ISpeficationsRepository,ICreateSpeficationsDTO }