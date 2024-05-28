import jwt from "jsonwebtoken";
import {UserModel} from '../models/user.js';

const adminmiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    console.log(token)

    try {
        const decoded = jwt.verify(token,process.env.ADMIN_KEY);
        const user = await UserModel.findById(decoded.userId);
        
        console.log("decoded", decoded)
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

export default adminmiddleware