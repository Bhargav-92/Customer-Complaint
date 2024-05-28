import ComplaintsModel from "../models/complaints.js";
import { format, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';


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
        const complaints = await ComplaintsModel.find({}, '-document')
        console.log(complaints);
        res.json(complaints);
    } catch (err) {
        res.status(500).json({ message: 'Cannot get complaints', error: err });
    }
};

export const currentWeek = async (req, res) => {
    const today = new Date();
    const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 1 });
    const endOfCurrentWeek = endOfWeek(today, { weekStartsOn: 1 });

    const formattedStartOfWeek = format(startOfCurrentWeek, 'yyyy-MM-dd');
    const formattedEndOfWeek = format(endOfCurrentWeek, 'yyyy-MM-dd');
    const weekDateArray = eachDayOfInterval({
        start: formattedStartOfWeek,
        end: formattedEndOfWeek,
    });

    const  currentWeekComplaint = await ComplaintsModel.find({
        date: {
            $gte: formattedStartOfWeek,
            $lte: formattedEndOfWeek
        }
    });

    if(currentWeekComplaint.length === 0){
        return res.status(404).json({message: "No complaints found for this week"});
    }
    const date = [];

    // for (let i = 0; i < weekDateArray.length; i++) {
    //     const date = weekDateArray[i];
    //     console.log(date)
    // }

    const dayArray = weekDateArray.map((date) => {
        return {
            date: format(date, 'dd/MM/yyyy'),
            count: 0
        }
    })
    const data = currentWeekComplaint.reduce((data,complaint)=>{
        const date = format(complaint.date, 'dd/MM/yyyy');
        console.log(date)
        const entry = dayArray.find((day) => day.date === date); 
        console.log(entry)
        console.log("Complaint",complaint)
        if(entry === undefined){
            return data
        }
        entry.count += 1;
        return data;
    },dayArray)
    res.json(data);
    console.log(data)
}



// get all complaints for user side 
export const getUserComplaint = async (req, res) => {
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

        console.log("Complaints", complaints)
        res.status(200).json(complaints)

    } catch (err) {
        res.status(500).json({ message: 'Cannot get complaints', error: err })
    }
}

// Update complaint status controller
export const updateComplaintStatus = async (req, res) => {
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


