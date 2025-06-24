import express from 'express';
import {createUser , fetchUsers  , deleteUsers , updateUsers , getUserById}  from '../controllers/userController.js'
const router = express.Router();

router.post('/api/users',createUser);
router.delete('/api/users/:id',deleteUsers);
router.get('/api/users',fetchUsers);
router.get('/api/users/:id',getUserById);
router.put('/api/users/:id',updateUsers);
export default router;