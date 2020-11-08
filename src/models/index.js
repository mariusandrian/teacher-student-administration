const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const db = {};

const modelDefiners = [
  {
    name: 'teachers',
    model: require('./tables/teachers')
  },
];

// console.log(modelDefiners[0]);

// modelDefiners.forEach(modelDefiner=> {
//   db[modelDefiner.name] = modelDefiner.model(sequelize);
// });

// db[modelDefiners[0].name] = modelDefiners[0].model(sequelize);

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

exports.array = modelDefiners;
