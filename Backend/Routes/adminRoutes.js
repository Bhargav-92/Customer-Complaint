import express from 'express';
import adminmiddleware from '../Middleware/adminmiddleware.js';
import { getAllComplaints,updateComplaintStatus , getUserComplaint } from '../Controllers/complaint.js';


const router = express.Router();


// Get all complaints
router.get('/complaintdetails', adminmiddleware, getAllComplaints);

// Update complaint status
router.patch('/complaints/:id',adminmiddleware, updateComplaintStatus);

// get all compaint for user side raised by perticular user
router.get('/user/:userId/complaints',adminmiddleware, getUserComplaint);


// Update user and add profile image
router.patch('/users/:id', auth, upload, updateUserProfile);

export default router
