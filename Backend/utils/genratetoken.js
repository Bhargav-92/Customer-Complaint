import jwt from "jsonwebtoken";
// get the id of the user if user is admin or client



export const generateToken = (userId, isAdmin) => {

    const secretkey = isAdmin ? process.env.ADMIN_KEY: process.env.SECRET_KEY;
    const expiresIn = '1d'
    return jwt.sign({ userId, isAdmin }, secretkey, { expiresIn })
};

