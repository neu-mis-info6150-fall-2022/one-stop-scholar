import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: 'email is required'
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    contact: {
        type: Number
    },
    SSN: {
        type: Number
    }
}, {versionKey: false});

const sponsorDb = mongoose.createConnection('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/sponsorDb?retryWrites=true&w=majority');
const sponsorProfileModel = sponsorDb.model('profile',schema);

export default sponsorProfileModel;