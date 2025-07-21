import City from "../models/city.model";
import { CityDTO } from "../types/city.types";
import CrudRepository from "./crud.repository";

class CityRepository extends CrudRepository<CityDTO> {
  constructor() {
    super(City);
  }
}
export default CityRepository;
