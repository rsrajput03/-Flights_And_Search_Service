import { StatusCodes } from "http-status-codes";
import logger from "../config/logger.config";
import CityRepository from "../repositories/city.repository";
import { CityDTO } from "../types/city.types";
import { AppError, DatabaseError, NotFoundError } from "../utils/app-error";
import { UniqueConstraintError, ValidationError } from "sequelize";

const cityRepository = new CityRepository();

class CityService {
  async createCity(data: CityDTO) {
    try {
      const city = await cityRepository.create(data);
      return city;
    } catch (error: any) {
      if (error instanceof ValidationError || error instanceof UniqueConstraintError) {
        const explanation = error.errors.map((err) => err.message);
        throw new DatabaseError("Something Went Wrong", explanation);
      }

      logger.error("AirplaneService.createCity: Unexpected error", {
        message: error?.message,
        stack: error?.stack,
        data,
      });

      throw new AppError("Failed to create city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async updateCity(id: number, data: Partial<CityDTO>) {
    try {
      const existingCity = await cityRepository.findOne(id);
      if (!existingCity) {
        throw new NotFoundError("City Requested to update does not exist");
      }
      await cityRepository.update(id, data);
      const city = await cityRepository.findOne(id);
      return city;
    } catch (error: any) {
      if (error instanceof NotFoundError) {
        throw error;
      }

      logger.error("AirplaneService.createCity: Unexpected error", {
        message: error?.message,
        stack: error?.stack,
        data,
      });

      throw new AppError("Failed to update city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteCity(id: number) {
    try {
      const city = await cityRepository.delete(id);
      if (!city) {
        throw new NotFoundError("City Requested to delete does not exist");
      }
      return city;
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new AppError("Failed to delete city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export default CityService;
