import mongoose from "mongoose";

const schema = new mongoose.Schema({
    scholarshipType: {
        type: String,
        required: 'type is required'
    },
    scholarshipName: {
        type: String,
        required: 'name is required'
    },
    scholarshipDescription: {
        type: String,
    },
    scholarshipSponsor: {
        type: String,
    },
    scholarshipAmt: {
        type: String
    },
    scholarshipDeadline: {
        type: Date,
    },
    scholarshipCriteria: {
        type: String,
    },
    scholarshipApplicants: {
        type: String,
    }
}, {versionKey: false});

const nextAuthDb = mongoose.createConnection('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/scholarshipDb?retryWrites=true&w=majority');
const scholarshipModel = nextAuthDb.model('scholarships',schema);

export default scholarshipModel;