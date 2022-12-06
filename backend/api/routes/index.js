import userRouter from './nextAuthDbRouters/users-router.js';
import studentProfileRouter from './studentDbRouters/profile-router.js';

// All requests should have /tasks after base URL
export default (app) => {
    app.use('/nextAuthDb/users', userRouter);
    app.use('/studentDb/profile', studentProfileRouter);
}