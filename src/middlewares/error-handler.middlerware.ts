import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { APIResponse } from "../utils/api-response";
import { AppError } from "../utils/app-error";
import logger from "../config/logger.config";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const error = err instanceof Error ? err : new Error("Unknown error");

  logger.error({
    message: error.message,
    stack: error.stack,
    name: error.name,
    path: req.originalUrl,
    method: req.method,
  });

  if (error instanceof AppError) {
    const response = APIResponse.error({
      statusCode: error?.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
      message: err.message,
      ...(process.env.NODE_ENV !== "production" && { error: err }),
    });
    res.status(error.statusCode).json(response);
    return;
  }

  const response = APIResponse.error({
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "Something went wrong !",
    ...(process.env.NODE_ENV !== "production" && { error: error }),
  });

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  return;
};

export default errorHandler;
