import express from 'express';
import path from 'path'; // Import the path module
import fs from 'fs';
import { fileURLToPath } from 'url'; // Import fileURLToPath
import { dirname } from 'path'; // Import dirname from path

// Define __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

/**
 * @swagger
 * /api/download/{filename}:
 *   get:
 *     summary: Download a file
 *     description: Downloads the file specified by the filename parameter.
 *     parameters:
 *       - in: path
 *         name: filename
 *         required: true
 *         description: The name of the file to download.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: File downloaded successfully.
 *       404:
 *         description: File not found.
 *       500:
 *         description: Error downloading file.
 */
router.get('/download/:filename', (req, res) => {
     const { filename } = req.params; // Get filename from request parameters
     const filePath = path.join(__dirname, '../uploads', filename); // Construct file path


    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ message: 'File not found.' });
        }

        // Set headers for the file download
        res.download(filePath, (err) => {
            if (err) {
                console.error('Error downloading file:', err);
                return res.status(500).json({ message: 'Error downloading file' });
            }
        });
    });
});

export default router;
