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

var generateReportData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var payload, getAll;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            payload = {};
            _context.next = 4;
            return _index["default"].enrolment.findAll({
              include: [{
                model: _index["default"].teachers,
                attributes: ['email']
              }, {
                model: _index["default"].subjects,
                attributes: ['code', 'name']
              }]
            });

          case 4:
            getAll = _context.sent;
            getAll.forEach(function (row) {
              if (row.teacher.email in payload) {
                var isSubjectExist = false;
                payload[row.teacher.email].forEach(function (subject) {
                  if (subject.subjectCode === row.subject.code) {
                    isSubjectExist = true;
                    subject.numberOfClasses = subject.numberOfClasses + 1;
                  }
                });

                if (!isSubjectExist) {
                  payload[row.teacher.email].push({
                    subjectCode: row.subject.code,
                    subjectName: row.subject.name,
                    numberOfClasses: 1
                  });
                }
              } else {
                payload[row.teacher.email] = [];
                payload[row.teacher.email].push({
                  subjectCode: row.subject.code,
                  subjectName: row.subject.name,
                  numberOfClasses: 1
                });
              }
            });
            return _context.abrupt("return", res.status(_httpStatusCodes.OK).json(payload));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            (0, _globalErrorHandler["default"])(_context.t0, req, res);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function generateReportData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = generateReportData;
exports["default"] = _default;