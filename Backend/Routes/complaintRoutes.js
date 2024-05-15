const express = require('express');
const ComplaintsModel = require('../models/complaints');

const router = express.Router();

// Complaint submission endpoint
router.post('/complaints', async (req, res) => {
    try {
        const newComplaint = new ComplaintsModel(req.body);
        const complaint = await newComplaint.save();
        res.json(complaint);
    } catch (err) {
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
