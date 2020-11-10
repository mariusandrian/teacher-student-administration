function applyAssociations (db) {
  const { teachers, students, subjects, classes, enrolment} = db;

  teachers.hasMany(enrolment);
  enrolment.belongsTo(teachers);

  students.hasMany(enrolment);
  enrolment.belongsTo(students);

  classes.hasMany(enrolment);
  enrolment.belongsTo(classes);

  subjects.hasMany(enrolment);
  enrolment.belongsTo(subjects);
}

module.exports = { applyAssociations };
