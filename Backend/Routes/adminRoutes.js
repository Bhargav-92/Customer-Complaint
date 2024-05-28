import express from 'express';
import adminmiddleware from '../Middleware/adminmiddleware.js';
import { getAllComplaints, updateComplaintStatus, getUserComplaint } from '../Controllers/complaint.js';
import { getprofile, updateprofile } from '../Controllers/users.js';

const router = express.Router();


// Get all complaints
router.get('/complaint', adminmiddleware, getAllComplaints);

// Update complaint status
router.patch('/complaints/:id', adminmiddleware, updateComplaintStatus);

// get all compaint for user side raised by perticular user
router.get('/user/:userId/complaints', adminmiddleware, getUserComplaint);


// for update profile 
router.get('/profile', adminmiddleware, getprofile ,)

// for update profile 
router.patch('/profile', adminmiddleware, updateprofile)

export default router
