import { StatusCodes } from "http-status-codes";
import { ValidationError } from "sequelize";
import logger from "../config/logger.config";
import FlightRepository from "../repositories/flight.repository";
import { FlightDTO } from "../types/flight.types";
import { AppError, DatabaseError } from "../utils/app-error";

const flightRepository = new FlightRepository();

class FlightService {
  async createFlight(data: FlightDTO) {
    try {
      const flight = await flightRepository.create(data);
      return flight;
    } catch (error: any) {
      if (error instanceof ValidationError) {
        const explanation = error.errors.map((err) => err.message);
        throw new DatabaseError("Something Went Wrong", explanation);
      }

      logger.error("FlightService.createAirport: Unexpected error", {
        message: error?.message,
        stack: error?.stack,
        data,
      });

      throw new AppError("Failed to create flight", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export default FlightService;
