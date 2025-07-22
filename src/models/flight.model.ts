import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { FlightDTO } from "../types/flight.types";
import Airplane from "./airplane.model";
import Airport from "./airport.model";

@Table({
  tableName: "Flights",
  timestamps: true,
})
class Flight extends Model<Flight, FlightDTO> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  flightNumber!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  arrivalTime!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  departureTime!: Date;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.STRING,
  })
  boardingGate!: string | null;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  totalSeats!: number;

  @ForeignKey(() => Airplane)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  airplaneId!: number;

  @ForeignKey(() => Airport)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  arrivalAirportId!: string;

  @ForeignKey(() => Airport)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  departureAirportId!: string;

  // Association
  @BelongsTo(() => Airplane)
  airplane!: Airplane;

  @BelongsTo(() => Airport)
  airport!: Airport;
}

export default Flight;
