import v1Routes from "./v1";
import express from "express";

const routes = express.Router();

routes.use("/v1", v1Routes);

export default routes;
