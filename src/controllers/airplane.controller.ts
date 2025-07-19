import { StatusCodes } from "http-status-codes";
import AirplaneService from "../services/airplane.service";
import { APIResponse } from "../utils/api-response";
import { NextFunction, Request, Response } from "express";

const airplaneService = new AirplaneService();

class AirplaneController {
  /**
   * POST : /airplanes
   * req-body {modelNumber: 'airbus320', capacity:}
   */
  async createAirplane(req: Request, res: Response, next: NextFunction) {
    const { modelNumber, capacity } = req.body;
    try {
      const airplane = await airplaneService.createAirplane({
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

  async getAirplanes(req: Request, res: Response, next: NextFunction) {
    try {
      const airplanes = await airplaneService.getAirplanes();
      const response = APIResponse.success({
        statusCode: StatusCodes.OK,
        message: "Airplanes fetched successfully",
        data: airplanes,
      });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getAirplane(req: Request, res: Response, next: NextFunction) {
    const id = parseFloat(req.params.id);
    try {
      const airplane = await airplaneService.getAirplane(id);
      const response = APIResponse.success({
        statusCode: StatusCodes.OK,
        message: "Airplane fetched successfully",
        data: airplane,
      });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteAirplane(req: Request, res: Response, next: NextFunction) {
    const id = parseFloat(req.params.id);
    try {
      const airplane = await airplaneService.deleteAirplane(id);
      const response = APIResponse.success({
        statusCode: StatusCodes.OK,
        message: "Airplane deleted successfully",
        data: airplane,
      });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
  async updateAirplane(req: Request, res: Response, next: NextFunction) {
    const id = parseFloat(req.params.id);
    const body = req.body;
    try {
      const airplane = await airplaneService.updateAirplane(id, body);
      const response = APIResponse.success({
        statusCode: StatusCodes.OK,
        message: "Airplane updated successfully",
        data: airplane,
      });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default AirplaneController;
