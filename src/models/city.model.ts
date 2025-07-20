import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CityDTO } from "../types/city.types";

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
}

export default City;
