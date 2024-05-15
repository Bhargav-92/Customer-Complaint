const mongoose = require('mongoose');

const ComplaintsSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: Number,
    state: String,
    city: String,
    type: String,
    sectors: String,
    company: String,
    date: { type: Date, default: Date.now },
    details: String,
    status: { type: String, default: 'Pending' },
    // userid: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'users'  // This should match the name used in mongoose.model() for users
    // }    
});

const ComplaintsModel = mongoose.model('complaints', ComplaintsSchema);
module.exports = ComplaintsModel;
