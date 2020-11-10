import Sequelize from 'sequelize';
import Logger from './logger';
import DataTypes from 'sequelize';

const LOG = new Logger('database.js');
const {
  DB_HOST = 'localhost',
  DB_PORT = '33306',
  DB_SCHEMA = 'school-administration-system',
  DB_USER = 'root',
  DB_PW = 'password',
  DB_POOL_ACQUIRE = '30000',
  DB_POOL_IDLE = '10000',
  DB_POOL_MAX_CONN = '10',
  DB_POOL_MIN_CONN = '1',
  DB_LOG_LEVEL = 'info',
} = process.env

const sequelize = new Sequelize(DB_SCHEMA, DB_USER, DB_PW, {
  dialect: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  pool: {
    acquire: parseInt(DB_POOL_ACQUIRE),
    idle: parseInt(DB_POOL_IDLE),
    max: parseInt(DB_POOL_MAX_CONN),
    min: parseInt(DB_POOL_MIN_CONN)
  },
  timezone: '+08:00',
  logging: (msg) => {
    LOG[DB_LOG_LEVEL](msg);
  }
});

// const Teacher = sequelize.define('teachers',  {
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataTypes.INTEGER
//   },
//   email: {
//     allowNull: false,
//     type: DataTypes.STRING
//   },
//   name: {
//     allowNull: false,
//     type: DataTypes.STRING
//   }
// });

// const Student = sequelize.define('students',  {
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataTypes.INTEGER
//   },
//   email: {
//     allowNull: false,
//     type: DataTypes.STRING
//   },
//   name: {
//     allowNull: false,
//     type: DataTypes.STRING
//   }
// });

// const Classroom = sequelize.define('classes',  {
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataTypes.INTEGER
//   },
//   code: {
//     allowNull: false,
//     type: DataTypes.STRING
//   },
//   name: {
//     allowNull: false,
//     type: DataTypes.STRING
//   }
// });

// const Subject = sequelize.define('subjects',  {
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataTypes.INTEGER
//   },
//   code: {
//     allowNull: false,
//     type: DataTypes.STRING
//   },
//   name: {
//     allowNull: false,
//     type: DataTypes.STRING
//   }
// });

// const Enrolment = sequelize.define('enrolments');

// Teacher.hasMany(Enrolment);
// Enrolment.belongsTo(Teacher);

// Student.hasMany(Enrolment);
// Enrolment.belongsTo(Student);

// Classroom.hasMany(Enrolment);
// Enrolment.belongsTo(Classroom);

// Subject.hasMany(Enrolment);
// Enrolment.belongsTo(Subject);

export default sequelize;

