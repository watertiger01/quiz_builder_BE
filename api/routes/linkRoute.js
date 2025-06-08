import express from 'express';
import {createLinkView } from '../views/linkViews.js'; // add .js extension

const router = express.Router();

//router.get('/getAllUsers', getAllUsersView);
router.post('/createLink', createLinkView);

export default router;
