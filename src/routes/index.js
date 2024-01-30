import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import noteRoute from './note.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome mr.manikanta');
  });
  //router.use('/user', userRoute);
  
  router.use('/notes', noteRoute);
  return router;
};

export default routes;
