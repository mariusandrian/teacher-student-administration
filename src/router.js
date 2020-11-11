import Express from 'express';
import HealthcheckController from './controllers/HealthcheckController';
import enrolmentController from './controllers/enrolmentController';
import reportController from './controllers/reportController';

const router = Express.Router();

router.post('/register', enrolmentController);

router.get('/reports/workload', reportController);

router.use('/', HealthcheckController);

export default router;
