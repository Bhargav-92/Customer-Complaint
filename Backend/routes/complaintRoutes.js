const express = require('express');
const router = express.Router();
const ComplaintsModel = require('../models/complaints');

// Complaint submission endpoint
router.post('/', async (req, res) => {
    try {
        const newComplaint = new ComplaintsModel(req.body);
        const complaint = await newComplaint.save();
        res.json(complaint);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all complaints
router.get('/', async (req, res) => {
    try {
        const complaints = await ComplaintsModel.find({});
        res.json(complaints);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
