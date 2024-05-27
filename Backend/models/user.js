import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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
    avatar:String,
    date: { type: Date, default: Date.now }
});

UsersSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export const UserModel = mongoose.model("users", UsersSchema);
