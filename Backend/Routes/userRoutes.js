const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user');

const router = express.Router();

// Login endpoint
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json("User not found");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("isMatch",isMatch);
        if (isMatch) {
            res.json("Success");  // Consider using a token or session management here
        } else {
            res.status(401).json("Incorrect password");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// User creation endpoint
router.post('/users', async (req, res) => {
    try {
        const newUser = new UserModel({
            ...req.body,
        });
        const user = await newUser.save();
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
