import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    token: string;
    user: {
        name: string;
        email: string;
    }
}


@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private repository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {

        const user = await this.repository.findByEmail(email);

        if (!user) {
            throw new Error("Email or password incorrect!")
        }

        const passwordCorret = await compare(password, user.password);

        if (!passwordCorret) {
            throw new Error("Email or password incorrect!")
        }

        const token = sign({}, "fc70dbf630ffeca399c90bc68e6acce5", { subject: user.id, expiresIn: "1d" })

        return {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }
    }

}

export { AuthenticateUserUseCase }