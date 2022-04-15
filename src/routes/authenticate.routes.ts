import { response, Router } from "express";
import { AuthenticateUseController } from "../modules/accounts/userCases/authenticateUser/AuthenticateUserController";

const authenticationRoutes = Router();
const authenticateUseController = new AuthenticateUseController();


authenticationRoutes.post("/sessions", authenticateUseController.handle);


export { authenticationRoutes };
