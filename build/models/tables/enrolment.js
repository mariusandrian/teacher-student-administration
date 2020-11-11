"use strict";

module.exports = function (sequelize, Sequelize) {
  return sequelize.define('enrolment', {
    subjectId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    classId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    teacherId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    studentId: {
      allowNull: false,
      type: Sequelize.INTEGER
    }
  });
};