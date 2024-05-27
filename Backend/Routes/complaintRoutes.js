
import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { submitComplaint,getUserComplaint } from '../Controllers/complaint.js';
import usermiddleware from '../Middleware/authmiddleware.js';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/Documents')); // Uploads folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique filename
    }
});

// File type filter to allow only images, videos, and PDFs
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/') || file.mimetype === 'application/pdf') {
//         cb(null, true); // Accept the file
//     } else {
//         cb(new Error('File type not supported'), false); // Reject the file
//     }
// };

const upload = multer({ storage: storage });

// Complaint submission endpoint
router.post('/complaints',usermiddleware, upload.single('document'), submitComplaint);



// get all compaint for user side raised by perticular user
router.get('/user/:userId/complaints',usermiddleware, getUserComplaint);

export default router;
