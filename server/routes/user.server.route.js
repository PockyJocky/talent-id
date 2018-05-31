// ./express-server/routes/user.server.route.js
import express from 'express';
//import controller file
import * as userController from "../controllers/user.server.controller"
// get an instance of express router
const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    userController.addUser(req, res);
});

router.find('/getUsers', (req, res) => {

});
export default router;