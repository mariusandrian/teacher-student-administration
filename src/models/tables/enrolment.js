const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('classes',  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    code: {
      allowNull: false,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  })
}
