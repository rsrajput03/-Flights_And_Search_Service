import AirplaneRepository from "../repositories/airplane-repository";

import { StatusCodes } from "http-status-codes";
import { AirplaneDTO } from "../models/airplane.model";
import { AppError, DatabaseError, NotFoundError, ValidationError } from "../utils/app-error";
import { ValidationError as SequelizeValidationError } from "sequelize";
import logger from "../config/logger-config";

const airplaneRepository = new AirplaneRepository();

class AirplaneService {
  async createAirplane(data: AirplaneDTO) {
    try {
      const airplane = await airplaneRepository.create(data);
      return airplane;
    } catch (error: any) {
      if (error instanceof SequelizeValidationError) {
        const explanation = error.errors.map((err) => err.message);
        throw new DatabaseError("Something Went Wrong", explanation);
      }

      logger.error("AirplaneService.createAirplane: Unexpected error", {
        message: error?.message,
        stack: error?.stack,
        data,
      });

      throw new AppError("Failed to create airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async getAirplanes() {
    try {
      const airplanes = await airplaneRepository.findAll();
      return airplanes;
    } catch (error) {
      throw new AppError("Failed to fetch all airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async getAirplane(id: number) {
    try {
      const airplane = await airplaneRepository.findOne(id);
      if (!airplane) {
        throw new NotFoundError("Airplane requested does not exist");
      }
      return airplane;
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new AppError("Failed to get airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteAirplane(id: number) {
    try {
      const airplane = await airplaneRepository.delete(id);
      if (!airplane) {
        throw new NotFoundError("Airplane requested for delete does not exist");
      }
      return airplane;
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new AppError("Failed to delete airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export default AirplaneService;
