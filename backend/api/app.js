import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import routes from './routes/index.js';

// 'express.json' To instruct the application that the incoming HTTP requests contains JSON payload
// 'express.urlencoded' To instruct the application that the incoming HTTP requests contains URL encoded payload
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Post request is recieved it will be forwarded to router to decode URL
// routes(app);

// Connect to mongodb using mongoose connect function
mongoose.connect('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/?retryWrites=true&w=majority');


export default app;