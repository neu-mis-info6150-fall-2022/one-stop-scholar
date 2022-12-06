import * as scholarshipServices from '../../services/scholarshipServices/scholarship-services.js';

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
        console.log("before controller");
        const allScholarships = await scholarshipServices.getAll();
        console.log("allScholarships",allScholarships);
        setResponse(allScholarships, res);
    } catch(error) {
        setError(error, res);
    }
}


