import { getRepository, Repository } from "typeorm";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDto";
import { Users } from "../../entities/Users";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<Users>

    constructor() {
        this.repository = getRepository(Users)
    }
    async create({ name, email, password, driver_license }: ICreateUsersDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
            driver_license
        })
        
        await this.repository.save(user);
    }
    async findByEmail(email: string): Promise<Users|undefined> {
        const user = await this.repository.findOne({email})

        return user;
    }
}

export { UsersRepository }