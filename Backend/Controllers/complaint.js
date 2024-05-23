import ComplaintsModel from "../models/complaints.js";


// Complaint submission controller
export const submitComplaint = async (req, res) => {
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

// Get all complaints  for admin side 
export const getAllComplaints = async (req, res) => {
    try {
        const complaints = await ComplaintsModel.find({});
        res.json(complaints);
    } catch (err) {
        res.status(500).json(err);
    }
};

// get all complaints for user side 
export const  getUserComplaint = async (req, res) => {
    try {
        const userId = req.params.userId

        if (!userId) {
            return res.status(400).json({ message: "User id is required" })
        }
        console.log(userId)
        const complaints = await ComplaintsModel.find({ userId })
        console.log(complaints)
        if (complaints.length === 0) {
            return res.status(404).json({ message: "No complaints found for this user" })
        }
        
        console.log("Complaints",complaints)
        res.status(200).json(complaints)

    } catch (err) {
        res.status(500).json(err)
    }
}

// Update complaint status controller
export const  updateComplaintStatus = async (req, res) => {
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


