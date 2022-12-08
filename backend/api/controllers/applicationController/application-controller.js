import { response } from 'express';
import * as applicationServices from '../../services/applicationServices/application-service.js';

// Default response in case of success and failure
const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

// Below are functions for each type of requests i.e. GET, POST
// Controller resolves the requests and consumes functions defined in services
export const getAll = async (req, res) => {
    try {
        const allApplications = await applicationServices.getAll();
        setResponse(allApplications, res);
    } catch(error) {
        setError(error, res);
    }
}

export const getByQuery = async (req, res) => {
    try {
        const query = req.query;
        const searchByQuery = await applicationServices.search(query);
        setResponse(searchByQuery, res);
    } catch (error) {
        setError(error, res);
    }
}

export const post = async (req, res) => {
    try {
        const application = req.body;
        const savedAplication = await applicationServices.save(application);
        setResponse(savedAplication, res);
    } catch (error) {
        setError(error, res);
    }
}