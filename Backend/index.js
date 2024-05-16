const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config(); // Load environment variables from .env file
const translateRoutes = require('./Routes/translate');
const userRoutes = require('./Routes/userRoutes');
const complaintRoutes = require('./Routes/complaintRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  console.error('Error: MONGODB_URI is not defined in the environment variables.');
  process.exit(1);
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api', userRoutes);
app.use('/api', complaintRoutes);
app.use('/api', translateRoutes);

// Server configuration
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
