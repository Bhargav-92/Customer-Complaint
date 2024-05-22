import bcrypt from 'bcryptjs';
import { UserModel } from '../models/user.js';
import {generateToken} from '../utils/genratetoken.js'

// Login controller
export const login = async (req, res) => {

    const { email, password } = req.body;
    
    const user = await UserModel.findOne({ email });

    console.log('user', user)
    // const passwordMathced = await user.comparePassword(password);

    const passwordMathced = await bcrypt.compare(password, user.password);

    console.log("passwordMathced", passwordMathced)
    console.log("password", password)
    // const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

    // if (user && (await user.comparePassword(password))) {
       if(passwordMathced) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });


    } else {
        res.status(401).json({ error: "Incorrect password" });
    }

    // try {
    //     const { email, password } = req.body;
    //     const user = await UserModel.findOne({ email });

    //     // check if it's user or not 
    //     const isAdmin = user && user.email === "admin@complainthub.com";

    //     console.log("isAdmin", isAdmin)
    //     if (!user) {
    //         return res.status(404).json({ error: "User not found" });
    //     }

    //     console.log("password", password)

    //     if (user && (await user.comparePassword(password))) {
    //         const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    //         // genrate the token for admin
    //         let admin_token = null;
    //         if (isAdmin) {
    //             admin_token = jwt.sign({ userId: user._id }, process.env.ADMIN_KEY, { expiresIn: '1d' });
    //         }

    //         // Remove password from user object before sending
    //         const userObj = user.toObject();
    //         delete userObj.password;

    //         res.json({ token, admin_token, user: userObj });
    //     } else {
    //         res.status(401).json({ error: "Incorrect password" });
    //     }
    // } catch (err) {
    //     res.status(500).json({ error: "Server error" });
    // }
};

// User creation controller
export const createUser = async (req, res) => {
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
export const  adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await UserModel.findOne({ email, role: 'admin' });
        if (!admin) {
            return res.status(404).json({ error: "Admin not found" });
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        console.log(isMatch)

        if (!isMatch) {
            const token = jwt.sign({ userId: admin._id }, process.env.ADMIN_KEY, { expiresIn: '1d' });
            const adminObj = admin.toObject();
            console.log(isMatch)

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

