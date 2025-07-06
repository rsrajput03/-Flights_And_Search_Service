import AirplaneRepository from "../repositories/airplane-repository";

import { StatusCodes } from "http-status-codes";
import { AirplaneDTO } from "../models/airplane.model";
import { AppError, DatabaseError, ValidationError } from "../utils/app-error";
import { ValidationError as SequelizeValidationError } from "sequelize";
import logger from "../config/logger-config";

class AirplaneService {
  async createAirplane(data: AirplaneDTO) {
    try {
      const airplane = await new AirplaneRepository().create(data);
      return airplane;
    } catch (error: any) {
      // ✅ Handle Sequelize validation error (e.g., missing required fields)
      if (error instanceof SequelizeValidationError) {
        const explanation = error.errors.map((err) => err.message);
        throw new DatabaseError("Something Went Wrong", explanation);
      }

      // ✅ Handle custom app-level validation error
      if (error instanceof ValidationError) {
        throw error;
      }

      // ✅ Log unexpected error
      logger.error("AirplaneService.createAirplane: Unexpected error", {
        message: error?.message,
        stack: error?.stack,
        data,
      });

      // ✅ Wrap unexpected errors
      throw new AppError(
        "Failed to create airplane",
        StatusCodes.INTERNAL_SERVER_ERROR,
        error
      );
    }
  }
}

export default AirplaneService;
