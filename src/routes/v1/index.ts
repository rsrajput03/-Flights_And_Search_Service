import { Router } from "express";
import airplaneRoutes from "./airplane.routes";
import cityRoutes from "./city.routes";
import airportRouts from "./airport.routes";
import flightRoutes from "./flight.routes";

const v1Routes = Router();

v1Routes.use("/airplanes", airplaneRoutes);
v1Routes.use("/cities", cityRoutes);
v1Routes.use("/airports", airportRouts);
v1Routes.use("/flights", flightRoutes);

export default v1Routes;
