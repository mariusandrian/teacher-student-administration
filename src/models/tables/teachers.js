const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('teachers',  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });
};
