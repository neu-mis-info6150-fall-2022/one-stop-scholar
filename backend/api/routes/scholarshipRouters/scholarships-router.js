import express from 'express';
import * as scholarshipsController from '../../controllers/scholarshipControllers/scholarships-controller.js';

const Router = express.Router();

// Defining URL patterns for each type of request, GET, POST, PUT, DELETE
// Post routing it will call functions in controller

Router.route('/').get(scholarshipsController.getAll);



export default Router;
