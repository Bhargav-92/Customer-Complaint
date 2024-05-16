const mongoose = require('mongoose');

const ComplaintsSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: Number,
    area: String,
    complaintType: String,
    sectors: String,
    company: String,
    date: { type: Date, default: Date.now }, // This will automatically set the date when the complaint is filed
    details: String,
    document: Buffer, // Store the document as a binary data buffer
    status: { type: String, default: 'Pending' }, // Default status set to 'Pending'
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

const ComplaintsModel = mongoose.model('complaints', ComplaintsSchema);
module.exports = ComplaintsModel;
