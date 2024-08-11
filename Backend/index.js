import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './Routes/userRoutes.js';
import complaintRoutes from './Routes/complaintRoutes.js';
import adminRoutes from './Routes/adminRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.disable('x-powered-by');

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
app.use('/api',adminRoutes)



// Server configuration
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
