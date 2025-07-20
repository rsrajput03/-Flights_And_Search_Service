import { Router } from "express";
import CityController from "../../controllers/city.controller";
import { validateCreateCityRequest } from "../../middlewares/city.middleware";

const cityRoutes = Router();
const cityController = new CityController();

cityRoutes.post("/", validateCreateCityRequest, cityController.createCity);
cityRoutes.patch("/:id", cityController.updateCity);
cityRoutes.delete("/:id", cityController.deleteCity);

export default cityRoutes;
