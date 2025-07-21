import CrudRepository from "./crud.repository";
import Airplane from "../models/airplane.model";
import { AirplaneDTO } from "../types/airplane.types";

class AirplaneRepository extends CrudRepository<AirplaneDTO> {
  constructor() {
    super(Airplane);
  }
}
export default AirplaneRepository;
