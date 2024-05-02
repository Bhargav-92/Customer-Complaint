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
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json("User not found");
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(500).json(err);
                }
                if (result) {
                    res.json("Success");  // Consider using a token or session management here
                } else {
                    res.status(401).json("Incorrect password");
                }
            });
        })
        .catch(err => res.status(500).json(err));
});

// User creation endpoint
app.post('/users', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
});

// Complaint submission endpoint
app.post('/complaints', (req, res) => {
    ComplaintsModel.create(req.body)
        .then(complaint => res.json(complaint))
        .catch(err => res.status(500).json(err));
});

// Server configuration
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
