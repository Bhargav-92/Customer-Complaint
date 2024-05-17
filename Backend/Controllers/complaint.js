const ComplaintsModel = require('../models/complaints');

// Complaint submission controller
exports.submitComplaint = async (req, res) => {
    try {
        const newComplaint = new ComplaintsModel({
            ...req.body,
            document: req.file ? req.file.path : null, // Save the document path if exists
        });
        const complaint = await newComplaint.save();
        console.log('complaint', complaint);
        res.json(complaint);
    } catch (err) {
        console.error('Error saving complaint:', err);
        res.status(500).json(err);
    }
};

// Get all complaints controller
exports.getAllComplaints = async (req, res) => {
    try {
        const complaints = await ComplaintsModel.find({});
        res.json(complaints);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Update complaint status controller
exports.updateComplaintStatus = async (req, res) => {
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
};
