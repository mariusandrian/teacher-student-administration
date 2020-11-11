"use strict";

function applyAssociations(db) {
  var teachers = db.teachers,
      students = db.students,
      subjects = db.subjects,
      classes = db.classes,
      enrolment = db.enrolment;
  teachers.hasMany(enrolment);
  enrolment.belongsTo(teachers);
  students.hasMany(enrolment);
  enrolment.belongsTo(students);
  classes.hasMany(enrolment);
  enrolment.belongsTo(classes);
  subjects.hasMany(enrolment);
  enrolment.belongsTo(subjects);
}

module.exports = {
  applyAssociations: applyAssociations
};