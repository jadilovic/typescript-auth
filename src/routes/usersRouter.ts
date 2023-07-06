import express from 'express';
import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares/index';

const router = express.Router();

router.get('/', isAuthenticated, getAllUsers);
router.delete('/delete/:id', isAuthenticated, isOwner, deleteUser);
router.patch('/update/:id', isAuthenticated, isOwner, updateUser);

export default (): express.Router => {
	return router;
};
