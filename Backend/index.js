const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const UserModel = require('./models/user');
const ComplaintsModel = require('./models/complaints');  // Ensure this path is correct

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect("mongodb://localhost:27017/Complaint", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json("User not found");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.json("Success");  // Consider using a token or session management here
        } else {
            res.status(401).json("Incorrect password");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// User creation endpoint
app.post('/users', async (req, res) => {
    try {
        const { password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            ...req.body,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Complaint submission endpoint
app.post('/complaints', async (req, res) => {
    try {
        const newComplaint = new ComplaintsModel(req.body);
        const complaint = await newComplaint.save();
        res.json(complaint);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all complaints
app.get('/complaints', async (req, res) => {
    try {
        const complaints = await ComplaintsModel.find({});
        res.json(complaints);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update complaint status
app.patch('/complaints/:id', async (req, res) => {
    const { id } = req.params; // Extract the id from URL parameters
    const { status } = req.body; // Extract the status from request body

    try {
        // Update the complaint with the new status
        const updatedComplaint = await ComplaintsModel.findByIdAndUpdate(
            id, 
            { Status: status }, // Make sure to match the field name with your schema
            { new: true, runValidators: true } // Options to return the updated object and run model validators
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


// Server configuration
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
