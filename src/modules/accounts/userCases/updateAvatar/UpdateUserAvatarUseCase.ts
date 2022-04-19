import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { deleteFile } from "../../../../utils/file"

@injectable()
class UpdateUserAvatarUseCase {

    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) { }

    async execute(userId: string, avatarFile: string): Promise<void> {

        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new AppError("User not found")
        }

        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }

        user.avatar = avatarFile;

        await this.userRepository.create(user);

    }
}

export { UpdateUserAvatarUseCase }