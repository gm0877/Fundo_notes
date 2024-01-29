import express from 'express';
const router = express.Router();

import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/user', (req, res) => {
    res.json('Welcome mr.manikanta');
  });
  router.use('/user', userRoute);
  return router;
};

export default routes;
