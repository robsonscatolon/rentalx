import { inject, injectable } from "tsyringe"
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDto"
import { UsersRepository } from "../../repositories/implementations/UsersRepository"
import { hash } from "bcryptjs"

@injectable()
class CreateUserUseCase {
    constructor(@inject("UsersRepository")
    private usersRepository: UsersRepository
    ) { }

    async execute({name, email, password, driver_license}: ICreateUsersDTO): Promise<void> {

        const emailAlreadyExists = await this.usersRepository.findByEmail(email);

        if(emailAlreadyExists){
            throw new Error("User already exists!")
        }

        const passwordEncrypt = await hash(password, 8)

        await this.usersRepository.create({
            name,
            email, 
            password: passwordEncrypt,
            driver_license
        })
    }

}

export { CreateUserUseCase }