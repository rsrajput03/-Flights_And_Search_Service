import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CityDTO } from "../types/city.types";
import Airport from "./airport.model";

@Table({
  tableName: "Cities",
  timestamps: true,
})
class City extends Model<City, CityDTO> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name!: string;

  // Association
  @HasMany(() => Airport)
  airports!: Airport[];
}

export default City;
