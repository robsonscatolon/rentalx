import { ICreateUsersDTO } from "../dtos/ICreateUsersDto"
import { Users } from "../entities/Users"

interface IUsersRepository {

    create(data: ICreateUsersDTO): Promise<void>
    findByEmail(email:string): Promise<Users|undefined>
    findById(id: string): Promise<Users|undefined>
}

export { IUsersRepository }