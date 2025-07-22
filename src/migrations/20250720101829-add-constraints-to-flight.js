"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Flights", {
      type: "foreign key",
      name: "fk_flights_arrival_airport",
      fields: ["arrivalAirportId"],
      references: {
        table: "Airports",
        field: "code",
      },
      onDelete: "CASCADE",
    });

    await queryInterface.addConstraint("Flights", {
      type: "foreign key",
      name: "fk_flights_departure_airport",
      fields: ["departureAirportId"],
      references: {
        table: "Airports",
        field: "code",
      },
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Flights", "fk_flights_arrival_airport");
    await queryInterface.removeConstraint("Flights", "fk_flights_departure_airport");
  },
};
