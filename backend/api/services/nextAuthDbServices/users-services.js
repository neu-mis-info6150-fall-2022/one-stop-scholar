import User from '../../models/nextAuthDbModels/users.js'

export const save = async (user) => {
    const newUser = new User(user);
    return newUser.save();
}

export const search = async (query) => {
    const params = {...query};
    const users = User.find(params).exec();
    return users;
}

export const getAll = async () => {
    const users = User.find().exec();
    return users;
}

export const getByQuery = async (query) => {
    const users = User.find(query).exec();
    return users;
}

export const update = async (queryParam, updateParam) => {
    const users = User.updateOne(queryParam, updateParam).exec();
    return users;
}

export const remove = async (query) => {
    const deletedUsers = User.deleteOne(query);
    return deletedUsers;
}