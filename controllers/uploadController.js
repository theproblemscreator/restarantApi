import File from '../models/file.js';

export const uploadFile = async (req, res) => {
    console.log('Request Body:', req.body);
    console.log('Uploaded File:', req.file);

    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }

    try {
        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

        const newFile = await File.create({
            url: fileUrl
        });

        return res.json({
            message: 'File uploaded and saved successfully!',
            file: newFile
        });
    } catch (error) {
        console.error('Error saving file:', error);
        return res.status(500).json({ message: 'Error uploading file' });
    }
};
