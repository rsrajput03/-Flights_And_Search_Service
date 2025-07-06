import e from "express";
import CrudRepository from "./crud-repository";
import Airplane, { AirplaneDTO } from "../models/airplane.model";

class AirplaneRepository extends CrudRepository<AirplaneDTO> {
  constructor() {
    super(Airplane);
  }
}
export default AirplaneRepository;
