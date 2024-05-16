// models/complaints.js
const mongoose = require('mongoose');

const ComplaintsSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    area: String,
    complaintType: String,
    sectors: String,
    company: String,
    date: { type: Date, default: Date.now },
    details: String,
    document: String,
    status: { type: String, default: 'Pending' },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

const ComplaintsModel = mongoose.model('complaints', ComplaintsSchema);
module.exports = ComplaintsModel;
