import { ICreateUsersDTO } from "../../dtos/ICreateUsersDto";
import { Users } from "../../entities/Users";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {

    private users: Users[] = []

    async create({ driver_license, email, name, password }: ICreateUsersDTO): Promise<void> {

        const newUser = new Users();

        Object.assign(newUser, { driver_license, email, name, password })

        this.users.push(newUser)

    }

    async findByEmail(email: string): Promise<Users | undefined> {
        return this.users.find(user => user.email === email)
    }
    
    async findById(id: string): Promise<Users | undefined> {
        return this.users.find(user => user.id === id)
    }

}

export { UsersRepositoryInMemory }