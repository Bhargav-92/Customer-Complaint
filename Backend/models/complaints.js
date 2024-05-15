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
    date: { type: Date, default: Date.now }, // This will automatically set the date when the complaint is filed
    details: String,
    Status: { type: String, default: 'Pending' } , // Default status set to 'Pending'
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'

   }
});

const ComplaintsModel = mongoose.model('complaints', ComplaintsSchema);
module.exports = ComplaintsModel;
