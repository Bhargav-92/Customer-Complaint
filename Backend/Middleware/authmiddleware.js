const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const bearer = req.header('Authorization');

    if (!bearer) {
        return res.status(401).json({ error: 'Access Denied. No token provided.' });
    }
    // console.log(bearer)
    const token = bearer.split(" ")[1]
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid or expired token.' });
    }
};

module.exports = auth;
