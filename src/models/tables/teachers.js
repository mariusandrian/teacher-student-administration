module.exports = (sequelize, Sequelize) => {
  return sequelize.define('teachers',  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    }
  });
};
