import userRouter from './nextAuthDbRouters/users-router.js';
import scholarshipRouter from './scholarshipRouters/scholarships-router.js';

export default (app) => {
    app.use('/nextAuthDb/users', userRouter);
    
    app.use('/scholarships', scholarshipRouter);
}
