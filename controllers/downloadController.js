import path from 'path';
import fs from 'fs';

export const downloadFile = (req, res) => {
    const { filename } = req.params; // Get filename from request parameters
    const filePath = path.join(__dirname, '../uploads', filename); // Construct file path
console.log(filePath)
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
};
