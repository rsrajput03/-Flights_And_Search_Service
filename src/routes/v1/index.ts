import { Router } from "express";
import airplaneRoutes from "./airplane.routes";
import cityRoutes from "./city.routes";

const v1Routes = Router();

v1Routes.use("/airplanes", airplaneRoutes);
v1Routes.use("/cities", cityRoutes);

export default v1Routes;
