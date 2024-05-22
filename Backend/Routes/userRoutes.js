import express from 'express';
import { login , createUser } from '../Controllers/users.js';
import auth from '../Middleware/authmiddleware.js';


const router = express.Router();

// Login endpoint
router.post('/login', login);

// User creation endpoint
router.post('/users', createUser);

// Protected route
router.get('/protected', auth, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});


// Update user and add profile image
// router.patch('/users/:id', auth, upload, updateUserProfile);

export default router
