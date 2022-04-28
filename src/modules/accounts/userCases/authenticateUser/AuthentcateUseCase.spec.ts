import { AppError } from "../../../../errors/AppError";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDto"
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUsers/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate Users", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it("should be able to authenticate with a existent user", async () => {
        const user: ICreateUsersDTO = {
            driver_license: "000123",
            email: "user@test.com",
            name: "username",
            password: "123456"
        }

        await createUserUseCase.execute({ name: user.name, email: user.email, password: user.password, driver_license: user.driver_license })

        const result = await authenticateUseCase.execute({ email: user.email, password: user.password })

        expect(result).toHaveProperty("token")
    })

    it("should not be able to a nonexistent user ", async () => {
        expect(async () => {
            await authenticateUseCase.execute({ email: "nonexistentuser@test.com", password: "123456" })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to authenticated with wrong password", async () => {
        expect(async () => {
            const user: ICreateUsersDTO = {
                driver_license: "000123",
                email: "user@test.com",
                name: "username",
                password: "123456"
            }

            await createUserUseCase.execute({ name: user.name, email: user.email, password: user.password, driver_license: user.driver_license })

            const result = await authenticateUseCase.execute({ email: user.email, password: "00000000" })

            expect(result).toHaveProperty("token")
        }).rejects.toBeInstanceOf(AppError)
    })
})
