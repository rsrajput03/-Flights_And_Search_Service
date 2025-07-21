export interface ErrorResponse {
  message: string;
  statusCode: number;
  errors?: any;
}

export interface SuccessResponse<T> extends ErrorResponse {
  data: T;
}

export interface APIResponseDTO<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any;
  statusCode: number;
}
