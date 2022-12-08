import Application from '../../models/applicationDbModels/application.js'

export const getAll = async () => {
    const application = Application.find().exec();
    return application;
}

export const search = async (query) => {
    const application = Application.find(query).exec();
    return application;
}

export const save = (data) => {
    const application = new Application(data);
    return application.save();
}

export const update = async (queryParam, updateParam) => {
    const application = Application.updateOne(queryParam, updateParam).exec();
    return application;
}