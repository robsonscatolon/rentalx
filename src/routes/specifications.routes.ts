import { response, Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationsController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router()
const specificationRepository = new SpecificationsRepository()

specificationsRoutes.post("/", (request, response) => {

   return createSpecificationsController.handle(request, response)

})


export {specificationsRoutes}