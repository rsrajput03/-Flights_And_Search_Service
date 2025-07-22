import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../utils/app-error";

function validateCreateAirporteRequest(req: Request, res: Response, next: NextFunction) {
  if (!req.body.name) {
    const error = new ValidationError("Name is required", [
      {
        field: "name",
        message: "Name not found in the incoming request in the correct form",
      },
    ]);
    return next(error);
  }
  if (!req.body.code) {
    const error = new ValidationError("Code is required", [
      {
        field: "code",
        message: "Code not found in the incoming request in the correct form",
      },
    ]);
    return next(error);
  }
  if (!req.body.cityId) {
    const error = new ValidationError("CityId is required", [
      {
        field: "cityId",
        message: "CityId not found in the incoming request in the correct form",
      },
    ]);
    return next(error);
  }
  next();
}

export { validateCreateAirporteRequest };
