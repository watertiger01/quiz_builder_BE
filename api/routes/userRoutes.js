import express from 'express';
import { getAllUsersView, saveUserView } from '../views/userViews.js'; // add .js extension

const router = express.Router();

router.get('/getAllUsers', getAllUsersView);
router.post('/saveUser', saveUserView);

export default router;
