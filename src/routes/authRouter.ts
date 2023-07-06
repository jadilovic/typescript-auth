import { login, register } from '../controllers/AuthenticationController';
import express from 'express';

const router = express.Router();

router.post('/user', register);
router.post('/login', login);

export default (): express.Router => {
	return router;
};
