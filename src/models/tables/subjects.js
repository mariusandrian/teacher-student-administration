module.exports = (sequelize, Sequelize) => {
  return sequelize.define('subjects',  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    code: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    }
  })
}
