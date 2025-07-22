import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../utils/app-error";

function validateCreateFlightRequest(req: Request, res: Response, next: NextFunction) {
  const requiredFields = [
    "flightNumber",
    "arrivalTime",
    "departureTime",
    "price",
    "totalSeats",
    "airplaneId",
    "arrivalAirportId",
    "departureAirportId",
  ];

  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    const errorDetails = missingFields.map((field) => ({
      field,
      message: `${field} is required in the request body`,
    }));

    const error = new ValidationError("Missing required fields", errorDetails);
    return next(error);
  }

  next();
}

export { validateCreateFlightRequest };
