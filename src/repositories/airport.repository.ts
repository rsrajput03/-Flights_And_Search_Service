import Airport from "../models/airport.model";
import { AirportDTO } from "../types/airport.types";
import CrudRepository from "./crud.repository";

class AirportRepository extends CrudRepository<AirportDTO> {
  constructor() {
    super(Airport);
  }
}
export default AirportRepository;
