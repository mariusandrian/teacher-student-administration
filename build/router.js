"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _HealthcheckController = _interopRequireDefault(require("./controllers/HealthcheckController"));

var _enrolmentController = _interopRequireDefault(require("./controllers/enrolmentController"));

var _reportController = _interopRequireDefault(require("./controllers/reportController"));

var router = _express["default"].Router();

router.post('/register', _enrolmentController["default"]);
router.get('/reports/workload', _reportController["default"]);
router.use('/', _HealthcheckController["default"]);
var _default = router;
exports["default"] = _default;