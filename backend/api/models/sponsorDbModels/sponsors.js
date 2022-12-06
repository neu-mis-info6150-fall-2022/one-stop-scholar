import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: 'email is required'
    },
    firstName: {
        type: String,
        required: 'First Name is required'
    },
    lastName: {
        type: String,
        required: 'First Name is required'
    },
    dateOfBirth: {
        type: Date,
        required: 'Date Of Birth is required'
    },
    
}, {versionKey: false});

const nextAuthDb = mongoose.createConnection('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/sponsorDb?retryWrites=true&w=majority');
const userModel = nextAuthDb.model('profile',schema);

export default userModel;