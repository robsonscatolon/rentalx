import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

const specificationRepository = new SpecificationsRepository()

const createSpecificationsUseCase = new CreateSpecificationsUseCase(specificationRepository)

const createSpecificationsController = new CreateSpecificationsController(createSpecificationsUseCase)

export { createSpecificationsController }