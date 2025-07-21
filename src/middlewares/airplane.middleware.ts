import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../utils/app-error";

function validateCreateAirplaneRequest(req: Request, res: Response, next: NextFunction) {
  if (!req.body.modelNumber) {
    const error = new ValidationError("Model number is required", [
      {
        field: "modelNumber",
        message: "Model Number not found in the incoming request in the correct form",
      },
    ]);
    return next(error);
  }
  next();
}

export { validateCreateAirplaneRequest };
