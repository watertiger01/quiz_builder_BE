import express from 'express';
import {createLinkView,getLinks } from '../views/linkViews.js'; // add .js extension

const router = express.Router();

//router.get('/getAllUsers', getAllUsersView);
router.post('/createLink', createLinkView);
router.get('/getLinks', getLinks);
export default router;
