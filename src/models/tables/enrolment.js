module.exports = (sequelize, Sequelize) => {
  return sequelize.define('enrolment',  {
    subjectId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    classId: {
      allowNull: false,
      type: Sequelize.STRING
    },
    teacherId: {
      allowNull: false,
      type: Sequelize.STRING
    },
    studentId: {
      allowNull: false,
      type: Sequelize.STRING
    }
  })
}
