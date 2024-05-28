import bcrypt from 'bcryptjs';
import { UserModel } from '../models/user.js';
import { generateToken } from '../utils/genratetoken.js'

// Login controller
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        const passwordMatched = await bcrypt.compare(password, user.password);

        const isAdmin = user.email === "admin@complainthub.com";

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (passwordMatched) {
            const userObj = user.toObject();
            userObj.role = isAdmin ? "admin" : "user";

            const token = generateToken(user._id, isAdmin);

            // console.log("userObj", userObj)
            // console.log("isAdmin", isAdmin)

            res.status(201).json({ token, user: userObj });
        } else {
            res.status(401).json({ error: "Incorrect password" });
        }
    } catch (err) {
        res.status(500).json({ error: "Internal Server error" });
    }
};

// User creation controller
export const createUser = async (req, res) => {
    try {
        const newUser = new UserModel({
            ...req.body,
            password: req.body.password,
        });

        const user = await newUser.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};


// Profile Update 
export const getprofile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).select('-password')
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user)
    } catch (err) {
        res.status(500).json({ error: "Internal Server error" });
    }
}

export const updateprofile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id);
        const { name, phone, password } = req.body
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        user.name = name || user.name;
        user.phone = phone || user.phone;

        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: "Internal Server error" });
    }
}

// Get all users
export const getallusers = async (req, res) => {
    try {
        const users = await UserModel.find({}).select('-password').select('-date').select('-__v');
        console.log(users);
        res.status(200).json(users); // Sending response with status code 200
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: "Internal Server error" });
    }
};
