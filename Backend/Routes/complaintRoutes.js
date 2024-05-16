const express = require('express');
const ComplaintsModel = require('../models/complaints');
const multer = require('multer');
const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Complaint submission endpoint
router.post('/complaints', upload.single('document'), async (req, res) => {
    try {
        const newComplaint = new ComplaintsModel({
            ...req.body,
            document: req.file ? req.file.buffer : null, // Save the document file buffer if exists
        });
        const complaint = await newComplaint.save();
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
