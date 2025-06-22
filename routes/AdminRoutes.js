import express from 'express';
import {AdminController} from '../controller/AdminController.js'
import VerifyToken from '../middleware/verifyToken.js';
import authorizeRoles from '../middleware/rollToken.js';
const router = express.Router();

router.post('/admin', VerifyToken , authorizeRoles("ADMIN"),AdminController);

export default router;