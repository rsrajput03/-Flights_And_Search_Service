import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../utils/app-error";

function validateCreateCityRequest(req: Request, res: Response, next: NextFunction) {
  console.log("name ✏️", req.body.name);
  if (!req.body.name) {
    const error = new ValidationError("Name is required", [
      {
        field: "name",
        message: "City name not found in the incoming request in the correct form",
      },
    ]);
    return next(error);
  }
  next();
}

export { validateCreateCityRequest };
