import Scholarship from '../../models/scholarshipDataDbModels/scholarships.js'

export const getAll = async () => {
    const scholarships = Scholarship.find().exec();
    return scholarships;
}

export const search = async (query) => {
    const scholarship = Scholarship.find(query).exec();
    return scholarship;
}

export const getById = (id) => {
    const scholarship = Scholarship.findById(id).exec();
    return scholarship;
}

export const save = (data) => {
    const scholarship = new Scholarship(data);
    return scholarship.save();
}

export const update = async (queryParam, updateParam) => {
    const scholarship = Scholarship.updateOne(queryParam, updateParam).exec();
    return scholarship;
}

export const remove = async (query) => {
    const deletedScholarship = Scholarship.deleteOne(query);
    return deletedScholarship;
}