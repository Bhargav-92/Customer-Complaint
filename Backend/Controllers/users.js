const bcrypt = require('bcrypt');
const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');

// Login controller
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const isMatch = await bcrypt.compareSync(password, user.password);

        console.log("password" , user.password)

        console.log("isMatch" , isMatch)

        if (!isMatch) {
            const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '20d' });

            // Remove password from user object before sending
            const userObj = user.toObject();
            delete userObj.password;
            console.log("isMatch", isMatch)
            res.json({ token, user: userObj });
        } else {
            res.status(401).json({ error: "Incorrect password" });
        }
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// User creation controller
exports.createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new UserModel({
            ...req.body,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// Admin login controller
exports.adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await UserModel.findOne({ email, role: 'admin' });
        if (!admin) {
            return res.status(404).json({ error: "Admin not found" });
        }
        const isMatch = await bcrypt.compare(password, admin.password);

        if (isMatch) {
            const token = jwt.sign({ userId: admin._id }, process.env.ADMIN_KEY, { expiresIn: '20d' });
            const adminObj = admin.toObject();
            delete adminObj.password; // Remove password from admin object before sending
            res.json({ token, admin: adminObj });
        } else {
            res.status(401).json({ error: "Incorrect password" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

