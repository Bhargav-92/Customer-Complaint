const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;  // Adjust the salt rounds based on your security requirement

const UsersSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,  // Ensure the email is unique
        required: true  // Make the email field required
    },
    password: {
        type: String,
        required: true  // Make the password field required
    },
    phone: Number,
    role: {
        type: String,
        enum: ['user', 'admin'], // Set the available roles
        default: 'user' // Set a default role if not provided
    },
    date: { type: Date, default: Date.now }
});

// Pre-save hook to hash the password
UsersSchema.pre('save', function (next) {
    // Check if the password field is modified
    if (!this.isModified('password')) {
        return next();
    }

    // Hash the password
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if (err) {
            return next(err);
        }
        // Replace the plain text password with the hashed one
        this.password = hash;
        next();
    });
});

const UserModel = mongoose.model("users", UsersSchema);
module.exports = UserModel;
