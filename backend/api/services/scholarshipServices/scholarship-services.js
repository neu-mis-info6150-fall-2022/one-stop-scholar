import Scholarship from '../../models/scholarshipDataDbModels/scholarships.js'

export const getAll = async () => {
    const scholarships = Scholarship.find().exec();
    return scholarships;
}

export const getById = (id) => {
    const scholarship = Scholarship.findById(id).exec();
    return scholarship;
}