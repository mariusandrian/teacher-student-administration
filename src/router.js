import Express from 'express';
import HealthcheckController from './controllers/HealthcheckController';
import enrolmentController from './controllers/enrolmentController';

const router = Express.Router();

router.post('/register', enrolmentController);

router.use('/', HealthcheckController);

export default router;
