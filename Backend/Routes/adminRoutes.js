import express from 'express';
import adminmiddleware from '../Middleware/adminmiddleware.js';


const router = express.Router();

// Login endpoint
// Get all complaints
router.get('/complaints', adminmiddleware, getAllComplaints);

// Update complaint status
router.patch('/complaints/:id',adminmiddleware, updateComplaintStatus);

// get all compaint for user side raised by perticular user
router.get('/user/:userId/complaints',adminmiddleware, getUserComplaint);


// Update user and add profile image
router.patch('/users/:id', auth, upload, updateUserProfile);

export default router
