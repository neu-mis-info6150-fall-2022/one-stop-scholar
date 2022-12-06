import Scholarship from '../../models/scholarshipDataDbModels/scholarships.js'

export const getAll = async () => {
    console.log("before services");
    const scholarships = Scholarship.find().exec();
    console.log("scholarships",scholarships);
    return scholarships;
}