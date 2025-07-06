import { StatusCodes } from "http-status-codes";
import AirplaneService from "../services/airplane-service";
import { APIResponse } from "../utils/api-response";
import { NextFunction, Request, Response } from "express";

class AirplaneController {
  /**
   * POST : /airplanes
   * req-body {modelNumber: 'airbus320', capacity:}
   */
  async createAirplane(req: Request, res: Response, next: NextFunction) {
    const { modelNumber, capacity } = req.body;
    try {
      const airplane = await new AirplaneService().createAirplane({
        modelNumber,
        capacity,
      });
      const response = APIResponse.success({
        statusCode: StatusCodes.CREATED,
        message: "Airplane created succssfully",
        data: airplane,
      });
      res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default AirplaneController;
