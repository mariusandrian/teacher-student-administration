const Sequelize = require('sequelize');
import sequelize from '../config/database';
const { applyAssociations } = require('./associations');
const db = {};

const modelDefiners = [
  {
    name: 'teachers',
    model: require('./tables/teachers')
  },
  {
    name: 'students',
    model: require('./tables/students')
  },
  {
    name: 'subjects',
    model: require('./tables/subjects')
  },
  {
    name: 'classes',
    model: require('./tables/classes')
  },
  {
    name: 'enrolment',
    model: require('./tables/enrolment')
  },
];

  modelDefiners.forEach(modelDefiner=> {
    db[modelDefiner.name] = modelDefiner.model(sequelize, Sequelize);
  });

  applyAssociations(db);

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

export default db;
