import { Router } from "express";
import { CarControllers } from "../controllers/car.controller";
import { IsIdValid } from "../middleware/isIDValid.middleware";

export const carRouter = Router()

const carControllers = new CarControllers()

carRouter.post("/", carControllers.create)
carRouter.get("/", carControllers.findMany)
carRouter.get("/:id", IsIdValid.execute, carControllers.findOne)
carRouter.patch("/:id", IsIdValid.execute, carControllers.update)
carRouter.delete("/:id", IsIdValid.execute, carControllers.delete)
