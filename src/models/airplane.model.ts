import { Table, Column, Model, DataType } from "sequelize-typescript";
import { AirplaneDTO } from "../types/airplane.types";

@Table({
  tableName: "Airplanes",
  timestamps: true,
})
class Airplane extends Model<Airplane, AirplaneDTO> {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: any) {
    // define association here
  }
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
