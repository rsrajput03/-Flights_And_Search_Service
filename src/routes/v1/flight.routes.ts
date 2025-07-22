import { Router } from "express";
import FlightController from "../../controllers/flight.controller";
import { validateCreateFlightRequest } from "../../middlewares/flight.middleware";

const flightRoutes = Router();
const flightController = new FlightController();

flightRoutes.post("/", validateCreateFlightRequest, flightController.createFlight);

export default flightRoutes;
