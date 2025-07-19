import express from "express";
import AirplaneController from "../../controllers/airplane.controller";
import { validateRequest } from "../../middlewares/airplane.middleware";

const airplaneRoutes = express.Router();
const airplaneController = new AirplaneController();

airplaneRoutes.post("/", validateRequest, airplaneController.createAirplane);
airplaneRoutes.get("/", airplaneController.getAirplanes);
airplaneRoutes.get("/:id", airplaneController.getAirplane);
airplaneRoutes.delete("/:id", airplaneController.deleteAirplane);
airplaneRoutes.patch("/:id", airplaneController.updateAirplane);

export default airplaneRoutes;
