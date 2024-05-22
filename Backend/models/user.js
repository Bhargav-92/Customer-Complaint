import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
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

// UsersSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       next();
//     }
  
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   });
  
//   UsersSchema.methods.comparePassword = async function (enteredPassword) {
//     console.log('enteredPassword', enteredPassword)
//     return await bcrypt.compare(enteredPassword, this.password);
//   };


export const UserModel = mongoose.model("users", UsersSchema);


