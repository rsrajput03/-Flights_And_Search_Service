import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FlightService from "../services/flight.service";
import { APIResponse } from "../utils/api-response";

const flightService = new FlightService();

class FlightController {
  async createFlight(req: Request, res: Response, next: NextFunction) {
    const {
      flightNumber,
      airplaneId,
      arrivalAirportId,
      arrivalTime,
      departureTime,
      departureAirportId,
      boardingGate,
      price,
      totalSeats,
    } = req.body;
    try {
      const flight = await flightService.createFlight({
        airplaneId,
        arrivalAirportId,
        arrivalTime,
        departureTime,
        departureAirportId,
        flightNumber,
        boardingGate,
        price,
        totalSeats,
      });
      const response = APIResponse.success({
        statusCode: StatusCodes.CREATED,
        message: "Flight created succssfully",
        data: flight,
      });
      res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default FlightController;
