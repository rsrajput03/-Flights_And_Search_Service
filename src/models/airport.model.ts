import { DataTypes } from "sequelize";
import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { AirportDTO } from "../types/airport.types";
import City from "./city.model";
import Flight from "./flight.model";

@Table({
  tableName: "Airports",
  timestamps: true,
})
class Airport extends Model<Airport, AirportDTO> {
  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  })
  name!: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  })
  code!: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  })
  address!: string;

  @ForeignKey(() => City)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  cityId!: number;

  // Association
  @BelongsTo(() => City)
  city!: City;

  @HasMany(() => Flight)
  flights!: Flight[];
}

export default Airport;
