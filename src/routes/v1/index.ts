import express from "express";
import airplaneRoutes from "./airplane.routes";

const v1Routes = express.Router();

v1Routes.use("/airplanes", airplaneRoutes);

export default v1Routes;
