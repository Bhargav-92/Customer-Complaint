// routes/complaintRoutes.js
const express = require('express');
const ComplaintsModel = require('../models/complaints');
const multer = require('multer');
const path = require('path');
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

const upload = multer({ storage: storage});

// Complaint submission endpoint
router.post('/complaints', upload.single('document'), async (req, res) => {
    try {
        const newComplaint = new ComplaintsModel({
            ...req.body,
            document: req.file ? req.file.path : null, // Save the document path if exists
        });
        const complaint = await newComplaint.save();
        console.log('complaint', complaint)
        res.json(complaint);
    } catch (err) {
        console.error('Error saving complaint:', err);
        res.status(500).json(err);
    }
});

// Get all complaints
router.get('/complaints', async (req, res) => {
    try {
        const complaints = await ComplaintsModel.find({});
        res.json(complaints);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update complaint status
router.patch('/complaints/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updatedComplaint = await ComplaintsModel.findByIdAndUpdate(
            id,
            { status: status },
            { new: true, runValidators: true }
        );

        if (!updatedComplaint) {
            return res.status(404).json({ message: "Complaint not found" });
        }

        res.json(updatedComplaint);
    } catch (error) {
        console.error('Error updating complaint:', error);
        res.status(500).json({ message: "Failed to update complaint", error: error.message });
    }
});

module.exports = router;
