import jwt from "jsonwebtoken";

export const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
        expiresIn: "30d",
    });


    return token
};


