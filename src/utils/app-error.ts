import { StatusCodes } from "http-status-codes";

class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

class ValidationError extends AppError {
  public readonly errors: any[];

  constructor(message: string, errors: any[] = []) {
    super(message, StatusCodes.BAD_REQUEST);
    this.errors = errors;
  }
}

class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

class DatabaseError extends AppError {
  public readonly errors: any[];

  constructor(message: string, errors: any[] = []) {
    super(message, StatusCodes.BAD_REQUEST, true);
    this.errors = errors;
  }
}

class ForbiddenError extends AppError {
  constructor(message: string) {
    super(message, StatusCodes.FORBIDDEN);
  }
}

export {
  AppError,
  NotFoundError,
  BadRequestError,
  ValidationError,
  UnauthorizedError,
  DatabaseError,
  ForbiddenError,
};
