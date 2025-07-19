"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "airbus320",
          capacity: 900,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "boeing720",
          capacity: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
