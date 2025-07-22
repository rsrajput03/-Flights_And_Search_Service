import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import AirportService from "../services/airport.service";
import { APIResponse } from "../utils/api-response";

const airportService = new AirportService();

class AirportController {
  async createAirport(req: Request, res: Response, next: NextFunction) {
    const { name, code, address, cityId } = req.body;
    try {
      const airport = await airportService.createAirport({
        name,
        code,
        address,
        cityId,
      });
      const response = APIResponse.success({
        statusCode: StatusCodes.CREATED,
        message: "Airport created succssfully",
        data: airport,
      });
      res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getAirports(req: Request, res: Response, next: NextFunction) {
    try {
      const airports = await airportService.getAirports();
      const response = APIResponse.success({
        statusCode: StatusCodes.OK,
        message: "Airports fetched successfully",
        data: airports,
      });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getAirport(req: Request, res: Response, next: NextFunction) {
    const id = parseFloat(req.params.id);
    try {
      const airport = await airportService.getAirport(id);
      const response = APIResponse.success({
        statusCode: StatusCodes.OK,
        message: "Airport fetched successfully",
        data: airport,
      });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteAirport(req: Request, res: Response, next: NextFunction) {
    const id = parseFloat(req.params.id);
    try {
      const airport = await airportService.deleteAirport(id);
      const response = APIResponse.success({
        statusCode: StatusCodes.OK,
        message: "Airport deleted successfully",
        data: airport,
      });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
  async updateAirport(req: Request, res: Response, next: NextFunction) {
    const id = parseFloat(req.params.id);
    const body = req.body;
    try {
      const airport = await airportService.updateAirport(id, body);
      const response = APIResponse.success({
        statusCode: StatusCodes.OK,
        message: "Airport updated successfully",
        data: airport,
      });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default AirportController;
