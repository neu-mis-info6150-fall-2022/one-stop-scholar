import * as profileServices from '../../services/studentDbServices/profile-service.js';

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

export const search = async (req, res) => {
    try {
        const params = req.params;
        const searchByParam = await profileServices.search(params);
        setResponse(searchByParam, res);
    } catch (error) {
        setError(error, res);
    }
}


export const post = async (req, res) => {
    try {
        const profile = req.body;
        const savedProfile = await profileServices.save(profile);
        setResponse(savedProfile, res);
    } catch (error) {
        setError(error, res);
    }
}

export const put = async (req, res) => {
    try {
        const updateParam = req.body;
        const queryParam = req.params;
        const savedProfile = await profileServices.update(queryParam, updateParam);
        setResponse(savedProfile, res);
    } catch (error) {
        setError(error, res);
    }
}

export const remove = async (req, res) => {
    try {
        const query = req.params;
        const removedProfile = await profileServices.remove(query);
        setResponse(removedProfile, res);
    } catch (error) {
        setError(error, res)
    }
}


