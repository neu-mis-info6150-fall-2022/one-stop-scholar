import express from 'express';
import * as usersController from '../../controllers/nextAuthDbControllers/users-controller.js';

const Router = express.Router();

// Defining URL patterns for each type of request, GET, POST, PUT, DELETE
// Post routing it will call functions in controller
Router.route('/').get(usersController.getAll);
Router.route('/query').get(usersController.getByQuery);
Router.route('/:email').get(usersController.search);
Router.route('/').post(usersController.post);
Router.route('/:email').put(usersController.put);
Router.route('/:email').delete(usersController.remove);

export default Router;
