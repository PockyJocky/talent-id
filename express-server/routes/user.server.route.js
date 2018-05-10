// ./express-server/routes/user.server.route.js
import express from 'express';
//import controller file
import * as userController from '../controllers/user.server.controller';
// get an instance of express router
const router = express.Router();
router.route('/')
    .post(userController.addUser);
export default router;