const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/user');

// Login endpoint
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            res.json({ message: "Success" });  // Consider using a token or session management here
        } else {
            res.status(401).json({ error: "Incorrect email or password" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// User creation endpoint
router.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
