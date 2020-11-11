"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _database = _interopRequireDefault(require("../config/database"));

var Sequelize = require('sequelize');

var _require = require('./associations'),
    applyAssociations = _require.applyAssociations;

var db = {};
var modelDefiners = [{
  name: 'teachers',
  model: require('./tables/teachers')
}, {
  name: 'students',
  model: require('./tables/students')
}, {
  name: 'subjects',
  model: require('./tables/subjects')
}, {
  name: 'classes',
  model: require('./tables/classes')
}, {
  name: 'enrolment',
  model: require('./tables/enrolment')
}];
modelDefiners.forEach(function (modelDefiner) {
  db[modelDefiner.name] = modelDefiner.model(_database["default"], Sequelize);
});
applyAssociations(db);
db.sequelize = _database["default"];
db.Sequelize = Sequelize;
var _default = db;
exports["default"] = _default;