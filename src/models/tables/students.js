module.exports = (sequelize, Sequelize) => {
  return sequelize.define('students',  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    email: {
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
