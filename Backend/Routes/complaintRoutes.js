const express = require('express');
const multer = require('multer');
const path = require('path');
const {
    submitComplaint,
    getAllComplaints,
    updateComplaintStatus
} = require('../Controllers/complaint');
const auth = require('../Middleware/authmiddleware');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/')); // Uploads folder
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
router.post('/complaints',auth, upload.single('document'), submitComplaint);

// Get all complaints
router.get('/complaints', auth, getAllComplaints);

// Update complaint status
router.patch('/complaints/:id',auth, updateComplaintStatus);

module.exports = router;
