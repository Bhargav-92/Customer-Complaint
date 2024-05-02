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
    date: Date,
    details: String,   
});

const ComplaintsModel = mongoose.model('complaints', ComplaintsSchema);
module.exports = ComplaintsModel;
