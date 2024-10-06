// routes/uploadRoutes.js
import express from 'express';
import { uploadFile } from '../controllers/uploadController.js';
//import upload from '../config/multerConfig.js';
import upload from '../config/multer.js';
const router = express.Router();


/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload a file
 *     description: Uploads a file and returns the file's URL and ID.
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The file to upload.
 *     responses:
 *       200:
 *         description: File uploaded and saved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: File uploaded and saved successfully!
 *                 file:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     url:
 *                       type: string
 *                       example: http://localhost:3000/uploads/my-image.png
 *       400:
 *         description: No file uploaded.
 *       500:
 *         description: Error uploading file.
 */


// File upload route

router.post('/upload', upload.single('file'), uploadFile);


export default router;
