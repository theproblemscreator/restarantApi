import express from 'express';
import {ProfileController} from '../controller/ProfileController.js'
import VerifyToken from '../middleware/verifyToken.js';
import authorizeRoles from '../middleware/rollToken.js';
const router = express.Router();

router.post('/profile', VerifyToken , authorizeRoles("USER"),ProfileController);

export default router;