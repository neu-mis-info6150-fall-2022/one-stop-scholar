import userRouter from './nextAuthDbRouters/users-router.js';

// All requests should have /tasks after base URL
export default (app) => {
    app.use('/nextAuthDb/users', userRouter);
}