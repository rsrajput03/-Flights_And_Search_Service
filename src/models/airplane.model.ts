import { Table, Column, Model, DataType } from "sequelize-typescript";
import { AirplaneDTO } from "../types/airplane.types";

@Table({
  tableName: "Airplanes",
  timestamps: true,
})
class Airplane extends Model<Airplane, AirplaneDTO> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  modelNumber!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      max: 1000,
    },
  })
  capacity!: number;
}

export default Airplane;
