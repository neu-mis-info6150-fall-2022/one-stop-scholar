import mongoose from "mongoose";
// import {nextAuthDb} from '../../app.js'

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: 'email is required'
    },
    name: {
        type: String,
        required: 'name is required'
    },
    image: {
        type: String,
    },
    emailVerified: {
        type: String,
    },
    userType: {
        type: String,
        required: 'userType is required'
    }
}, {versionKey: false});

const nextAuthDb = mongoose.createConnection('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/nextauthDb?retryWrites=true&w=majority');
const userModel = nextAuthDb.model('users',schema);

export default userModel;