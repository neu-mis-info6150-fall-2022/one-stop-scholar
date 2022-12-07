import express from 'express';
import * as scholarshipsController from '../../controllers/scholarshipControllers/scholarships-controller.js';

const Router = express.Router();

// Defining URL patterns for each type of request, GET, POST, PUT, DELETE
// Post routing it will call functions in controller

Router.route('/').get(scholarshipsController.getAll);
Router.route('/:id').get(scholarshipsController.getById);
Router.route('/:email').get(scholarshipsController.getByEmail);
Router.route('/').post(scholarshipsController.post);
Router.route('/:id').put(scholarshipsController.put);
Router.route('/:id').delete(scholarshipsController.remove);


export default Router;
