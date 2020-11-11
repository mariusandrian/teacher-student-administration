'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // return queryInterface.Sequelize.createTable("teachers", {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    //   },
    //   email: {
    //     allowNull: false,
    //     type: DataTypes.STRING
    //   },
    //   name: {
    //     allowNull: false,
    //     type: DataTypes.STRING
    //   }
    // })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("teachers");
  }
};
