import { Router } from "express";
import AirplaneController from "../../controllers/airplane.controller";
import { validateCreateAirplaneRequest } from "../../middlewares/airplane.middleware";

const airplaneRoutes = Router();
const airplaneController = new AirplaneController();

airplaneRoutes.post("/", validateCreateAirplaneRequest, airplaneController.createAirplane);
airplaneRoutes.get("/", airplaneController.getAirplanes);
airplaneRoutes.get("/:id", airplaneController.getAirplane);
airplaneRoutes.delete("/:id", airplaneController.deleteAirplane);
airplaneRoutes.patch("/:id", airplaneController.updateAirplane);

export default airplaneRoutes;
