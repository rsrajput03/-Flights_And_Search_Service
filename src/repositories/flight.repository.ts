import Flight from "../models/flight.model";
import { FlightDTO } from "../types/flight.types";
import CrudRepository from "./crud.repository";

class FlightRepository extends CrudRepository<FlightDTO> {
  constructor() {
    super(Flight);
  }
}
export default FlightRepository;
