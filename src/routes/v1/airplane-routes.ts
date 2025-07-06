import express from "express";
import AirplaneController from "../../controllers/airplane-controller";
import { validateRequest } from "../../middlewares/airplane-middleware";

const airplaneRoutes = express.Router();
const airplaneController = new AirplaneController();

airplaneRoutes.post("/", validateRequest, airplaneController.createAirplane);

export default airplaneRoutes;
