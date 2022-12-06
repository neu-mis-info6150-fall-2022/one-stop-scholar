import Profile from '../../models/studentDbModels/profile.js';

export const save = async (data) => {
    const profile = new Profile(data);
    return profile.save();
}

export const search = async (query) => {
    const params = {...query};
    const profile = await Profile.findOne(params).exec();
    return profile;
}

export const update = async (queryParam, updateParam) => {
    const profile = Profile.updateOne(queryParam, updateParam).exec();
    return profile;
}

export const remove = async (query) => {
    const deletedProfile = Profile.deleteOne(query);
    return deletedProfile;
}