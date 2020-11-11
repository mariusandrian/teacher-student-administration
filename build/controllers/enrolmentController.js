"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCodes = require("http-status-codes");

var _globalErrorHandler = _interopRequireDefault(require("../config/globalErrorHandler"));

var _index = _interopRequireDefault(require("../models/index"));

var enrolStudents = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var students, teacher, subject, classroom, studentId, studentResult, teacherResult, subjectResult, classroomResult, teacherId, subjectId, classId;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // Assuming only one teacher, one subject and one class
            students = req.body.students;
            teacher = req.body.teacher;
            subject = req.body.subject;
            classroom = req.body["class"];
            studentId = [];

            if (!Array.isArray(students)) {
              _context3.next = 10;
              break;
            }

            students.forEach( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(student) {
                var studentResult;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _index["default"].students.findOrCreate({
                          where: {
                            email: student.email
                          },
                          defaults: {
                            name: student.name,
                            email: student.email
                          }
                        });

                      case 2:
                        studentResult = _context.sent;
                        studentId.push(studentResult[0].dataValues.id);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context3.next = 14;
            break;

          case 10:
            _context3.next = 12;
            return _index["default"].students.findOrCreate({
              where: {
                email: student.email
              },
              defaults: {
                name: student.name,
                email: student.email
              }
            });

          case 12:
            studentResult = _context3.sent;
            studentId.push(studentResult[0].dataValues.id);

          case 14:
            _context3.next = 16;
            return _index["default"].teachers.findOrCreate({
              where: {
                email: teacher.email
              },
              defaults: {
                name: teacher.name,
                email: teacher.email
              }
            });

          case 16:
            teacherResult = _context3.sent;
            _context3.next = 19;
            return _index["default"].subjects.findOrCreate({
              where: {
                code: subject.subjectCode
              },
              defaults: {
                code: subject.subjectCode,
                name: subject.name
              }
            });

          case 19:
            subjectResult = _context3.sent;
            _context3.next = 22;
            return _index["default"].classes.findOrCreate({
              where: {
                code: classroom.classCode
              },
              defaults: {
                code: classroom.classCode,
                name: classroom.name
              }
            });

          case 22:
            classroomResult = _context3.sent;
            teacherId = teacherResult[0].dataValues.id;
            subjectId = subjectResult[0].dataValues.id;
            classId = classroomResult[0].dataValues.id; // Populate enrolment table

            if (!Array.isArray(students)) {
              _context3.next = 30;
              break;
            }

            studentId.forEach( /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(student) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _index["default"].enrolment.create({
                          studentId: student,
                          teacherId: teacherId,
                          subjectId: subjectId,
                          classId: classId
                        });

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x4) {
                return _ref3.apply(this, arguments);
              };
            }());
            _context3.next = 32;
            break;

          case 30:
            _context3.next = 32;
            return _index["default"].enrolment.create({
              studentId: studentId[0],
              teacherId: teacherId,
              subjectId: subjectId,
              classId: classId
            });

          case 32:
            return _context3.abrupt("return", res.sendStatus(_httpStatusCodes.NO_CONTENT));

          case 35:
            _context3.prev = 35;
            _context3.t0 = _context3["catch"](0);
            (0, _globalErrorHandler["default"])(_context3.t0, req, res);

          case 38:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 35]]);
  }));

  return function enrolStudents(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = enrolStudents;
exports["default"] = _default;