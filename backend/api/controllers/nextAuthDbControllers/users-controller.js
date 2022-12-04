import * as userServices from '../../services/nextAuthDbServices/users-services.js';

// Default response in case of success and failure
const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

// Below are functions for each type of requests i.e. GET, POST, PUT, DELETE
// Controller resolves the requests and consumes functions defined in services
export const getAll = async (req, res) => {
    try {
        const allUsers = await userServices.getAll();
        setResponse(allUsers, res);
    } catch(error) {
        setError(error, res);
    }
}

export const search = async (req, res) => {
    try {
        const params = req.params;
        const searchByParam = await userServices.search(params);
        setResponse(searchByParam, res);
    } catch (error) {
        setError(error, res);
    }
}

export const getByQuery = async (req, res) => {
    try {
        const query = req.query;
        const searchByQuery = await userServices.getByQuery(query);
        setResponse(searchByQuery, res);
    } catch (error) {
        setError(error, res);
    }
}

export const post = async (req, res) => {
    try {
        const user = req.body;
        const savedUser = await userServices.save(user);
        setResponse(savedUser, res);
    } catch (error) {
        setError(error, res);
    }
}

export const put = async (req, res) => {
    try {
        const updateParam = req.body;
        const queryParam = req.params;
        const savedUser = await userServices.update(queryParam, updateParam);
        setResponse(savedUser, res);
    } catch (error) {
        setError(error, res);
    }
}

export const remove = async (req, res) => {
    try {
        const query = req.params;
        const removedUser = await userServices.remove(query);
        setResponse(removedUser, res);
    } catch (error) {
        setError(error, res)
    }
}


