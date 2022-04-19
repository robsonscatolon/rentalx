import { Router } from "express";
import multer from "multer";
import upload from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/userCases/createUsers/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/userCases/updateAvatar/UpdateUserAvatarController";

const usersRoutes = Router()
const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController();
const uploadAvatar = multer(upload.updload("./tmp/avatar"))

usersRoutes.post("/", createUserController.handle)
usersRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle)


export { usersRoutes }