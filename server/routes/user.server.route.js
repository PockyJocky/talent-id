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

router.get('/getAll', (req, res) => {
    userController.getUsers(req, res);
});

router.get('/fight', (req, res) => {
    console.log("My name is Tron and I fight for the Users")
    res.send({Tron: "I fight for the Users"})
});
export default router;