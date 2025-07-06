export interface APIResponseDTO<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any;
  statusCode: number;
}

export class APIResponse {
  // success response
  static success<T>({
    data,
    message = "Success",
    statusCode = 200,
  }: {
    data: T;
    message: string;
    statusCode: number;
  }): APIResponseDTO<T> {
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
  }: {
    message: string;
    statusCode: number;
  }): APIResponseDTO<null> {
    return {
      success: false,
      message,
      statusCode,
    };
  }
}
