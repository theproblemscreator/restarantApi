import { Login , dashboard } from '../controllers/LoginController.js';
import {fetchAllUsers,saveUser} from '../controllers/userController.js'
import VerifyToken from '../authentication/VerifyUser.js'
import express from 'express';
import { VerifyRole } from '../authentication/VerifyRole.js';
const router = express.Router();

router.post('/api/users',saveUser);
router.post('/api/users/login',Login);

router.get('/dashboard', VerifyToken, VerifyRole("ADMIN"), dashboard);
router.get('/api/users', VerifyToken, VerifyRole("USER"), fetchAllUsers);




export default router;