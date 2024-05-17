const express = require('express');
const { login, createUser } = require('../Controllers/uses');
const router = express.Router();

// Login endpoint
router.post('/login', login);

// User creation endpoint
router.post('/users', createUser);

module.exports = router;
