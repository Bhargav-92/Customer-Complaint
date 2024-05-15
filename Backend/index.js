const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require('./Routes/userRoutes');
const complaintRoutes = require('./Routes/complaintRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect("mongodb://localhost:27017/Complaint", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Use routes
app.use('/api', userRoutes);
app.use('/api', complaintRoutes);

// Server configuration
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
