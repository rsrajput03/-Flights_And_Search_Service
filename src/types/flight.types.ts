export interface FlightDTO {
  flightNumber: string;
  arrivalTime: Date;
  departureTime: Date;
  price: number;
  totalSeats: number;
  boardingGate: string | null;
  airplaneId: number;
  arrivalAirportId: string;
  departureAirportId: string;
}
