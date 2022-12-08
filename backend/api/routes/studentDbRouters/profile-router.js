import express from "express";
import * as ProfileController from '../../controllers/studentDbController/profile-controller.js';

const Router = express.Router();

// Defining URL patterns for each type of request, GET, POST, PUT, DELETE
// Post routing it will call functions in controller
Router.route('/:email').get(ProfileController.search);
Router.route('/v1/search').get(ProfileController.getByQuery);
Router.route('/').post(ProfileController.post);
Router.route('/:email').put(ProfileController.put);
Router.route('/:email').delete(ProfileController.remove);

export default Router;