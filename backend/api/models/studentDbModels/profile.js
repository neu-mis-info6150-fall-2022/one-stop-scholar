import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    email: {
        type: String,
        required: 'Email is required'
    },
    gender: {
        type: String
    },
    currentCity: {
        type: String
    },
    currentCountry: {
        type: String
    },
    highestQualification: {
        type: String
    },
    majors: {
        type: String
    },
    grade: {
        type: String
    },
    university: {
        type: String
    },
    yearOfCompletion: {
        type: Date
    },
    company: {
        type: String
    },
    companyLocation: {
        type: String
    },
    position: {
        type: String
    },
    duration: {
        type: Number
    }
}, {versionKey: false});

const nextAuthDb = mongoose.createConnection('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/studentDb?retryWrites=true&w=majority');
const studentProfileModel = nextAuthDb.model('profile',schema);

export default studentProfileModel;