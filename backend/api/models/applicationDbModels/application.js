import mongoose from "mongoose";

const schema = new mongoose.Schema({
    studentId: {
        type: String,
        required: 'student id is required'
    },
    scholarshipId: {
        type: String,
        required: 'scholarship id is required'
    },
    sponsorId: {
        type: String,
        required: 'sponsor id is required'
    },
    
}, { versionKey: false });

const nextAuthDb = mongoose.createConnection('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/applicationDb?retryWrites=true&w=majority');
const applicationModel = nextAuthDb.model('applications', schema);

export default applicationModel;