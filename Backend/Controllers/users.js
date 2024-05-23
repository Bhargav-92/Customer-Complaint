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

            console.log("userObj", userObj)
            console.log("isAdmin", isAdmin)

            res.status(201).json({ token, user: userObj });
        } else {
            res.status(401).json({ error: "Incorrect password" });
        }
    }catch(err){
        console.log("Login Error ",err);
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


// Admin login controller
// export const adminLogin = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const admin = await UserModel.findOne({ email, role: 'admin' });
//         if (!admin) {
//             return res.status(404).json({ error: "Admin not found" });
//         }
//         const isMatch = await bcrypt.compare(password, admin.password);


//         if (!isMatch) {
//             const token = jwt.sign({ userId: admin._id }, process.env.ADMIN_KEY, { expiresIn: '1d' });
//             const adminObj = admin.toObject();

//             delete adminObj.password; // Remove password from admin object before sending
//             res.json({ token, admin: adminObj });
//         } else {
//             res.status(401).json({ error: "Incorrect password" });
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Server error" });
//     }
// };

