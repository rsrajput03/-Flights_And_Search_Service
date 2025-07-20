import { NextFunction, Request, Response } from "express";
import CityService from "../services/city.service";
import { APIResponse } from "../utils/api-response";
import { StatusCodes } from "http-status-codes";

const cityService = new CityService();

class CityController {
  async createCity(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    try {
      const city = await cityService.createCity({ name });
      const response = APIResponse.success({
        statusCode: StatusCodes.CREATED,
        message: "City created Successfully",
        data: city,
      });
      res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateCity(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    try {
      const city = await cityService.updateCity(id, { name });
      const response = APIResponse.success({
        statusCode: StatusCodes.OK,
        message: "City updated Successfully",
        data: city,
      });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteCity(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    try {
      const city = await cityService.deleteCity(id);
      const response = APIResponse.success({
        statusCode: StatusCodes.OK,
        message: "City deleted Successfully",
        data: city,
      });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default CityController;
