const express = require('express');
const { login, createUser } = require('../Controllers/users');
const auth = require('../Middleware/authmiddleware');

const router = express.Router();

// Login endpoint
router.post('/login', login);

// User creation endpoint
router.post('/users', createUser);

// Protected route
router.get('/protected', auth, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
