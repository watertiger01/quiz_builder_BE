import express from 'express';
import { getAllUsersView, saveUserView, getUsersView} from '../views/userViews.js'; // add .js extension

const router = express.Router();

router.get('/getAllUsers', getAllUsersView);
router.post('/saveUser', saveUserView);
router.post('/getUser', getUsersView)
export default router;
