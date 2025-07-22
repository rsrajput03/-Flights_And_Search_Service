import { Router } from "express";
import AirportController from "../../controllers/airport.controller";
import { validateCreateAirporteRequest } from "../../middlewares/airport.middleware";

const airportRouts = Router();
const airportController = new AirportController();

airportRouts.post("/", validateCreateAirporteRequest, airportController.createAirport);
airportRouts.get("/", airportController.getAirports);
airportRouts.get("/:id", airportController.getAirport);
airportRouts.delete("/:id", airportController.deleteAirport);
airportRouts.patch("/:id", airportController.updateAirport);

export default airportRouts;
