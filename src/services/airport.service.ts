import { StatusCodes } from "http-status-codes";
import { ValidationError } from "sequelize";
import logger from "../config/logger.config";
import AirportRepository from "../repositories/airport.repository";
import { AirplaneDTO } from "../types/airplane.types";
import { AppError, DatabaseError, NotFoundError } from "../utils/app-error";
import { AirportDTO } from "../types/airport.types";

const airportRepository = new AirportRepository();

class AirportService {
  async createAirport(data: AirportDTO) {
    try {
      const airport = await airportRepository.create(data);
      return airport;
    } catch (error: any) {
      if (error instanceof ValidationError) {
        const explanation = error.errors.map((err) => err.message);
        throw new DatabaseError("Something Went Wrong", explanation);
      }

      logger.error("AirportService.createAirport: Unexpected error", {
        message: error?.message,
        stack: error?.stack,
        data,
      });

      throw new AppError("Failed to create airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async getAirports() {
    try {
      const airports = await airportRepository.findAll();
      return airports;
    } catch (error) {
      throw new AppError("Failed to fetch all airports", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async getAirport(id: number) {
    try {
      const airport = await airportRepository.findOne(id);
      if (!airport) {
        throw new NotFoundError("Airport requested does not exist");
      }
      return airport;
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new AppError("Failed to get airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteAirport(id: number) {
    try {
      const airport = await airportRepository.delete(id);
      if (!airport) {
        throw new NotFoundError("Airport requested for delete does not exist");
      }
      return airport;
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new AppError("Failed to delete airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async updateAirport(id: number, data: Partial<AirportDTO>) {
    try {
      const existingAirplane = await airportRepository.findOne(id);
      if (!existingAirplane) {
        throw new NotFoundError("Airport requested to update does not exist");
      }
      await airportRepository.update(id, data);
      const airport = await airportRepository.findOne(id);
      return airport;
    } catch (error: any) {
      if (error instanceof ValidationError) {
        const explanation = error.errors.map((err) => err.message);
        throw new DatabaseError("Something Went Wrong", explanation);
      }
      if (error instanceof NotFoundError) {
        throw error;
      }
      logger.error("AirportService.updateAirport: Unexpected error", {
        message: error?.message,
        stack: error?.stack,
        id,
        data,
      });

      throw new AppError("Failed to update airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export default AirportService;
