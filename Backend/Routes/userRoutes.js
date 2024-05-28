import express from 'express';
import { login, createUser, getprofile, updateprofile, getallusers } from '../Controllers/users.js';
import auth from '../Middleware/authmiddleware.js';
import adminmiddleware from '../Middleware/adminmiddleware.js';


const router = express.Router();

// Login endpoint
router.post('/login', login);

// User creation endpoint
router.post('/users', createUser);

// Protected route
router.get('/protected', auth, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

// for update profile 
router.get('/profile', auth, getprofile)

// for update profile 
router.patch('/profile', auth, updateprofile)


// get all users 
router.get('/userdata', getallusers)

export default router
