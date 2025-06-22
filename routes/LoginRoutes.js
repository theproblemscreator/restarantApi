import express from 'express';
import {LoginController} from '../controller/LoginController.js'
const router = express.Router();

router.post('/login',LoginController);

export default router;