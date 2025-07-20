import { APIResponseDTO, ErrorResponse, SuccessResponse } from "../types/common.types";

export class APIResponse {
  // success response
  static success<T>({
    data,
    message = "Success",
    statusCode = 200,
  }: SuccessResponse<T>): APIResponseDTO<T> {
    return {
      success: true,
      message,
      statusCode,
      data,
    };
  }

  // error response
  static error({
    message = "Unexpected Error",
    statusCode = 500,
    errors = null,
  }: ErrorResponse): APIResponseDTO<null> {
    return {
      success: false,
      message,
      statusCode,
      ...(errors && { errors }),
    };
  }
}
