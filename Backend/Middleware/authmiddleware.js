import jwt from "jsonwebtoken";
import {UserModel} from '../models/user.js';

const auth = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY || process.env.ADMIN_KEY);

        const user = await UserModel.findById(decoded.userId);
        console.log("user", user)

        console.log("user Email ", user.email)
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

export default auth