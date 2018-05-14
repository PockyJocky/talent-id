// ./express-server/routes/user.server.route.js
import express from 'express';
//import controller file
import * as userController from '../controllers/user.server.controller';
// get an instance of express router
const router = express.Router();
router.get('/', function(req, res){
    res.render('index')
});

router.get('/adduser', function(req, res){
    res.render(userController.addUser(res))
})
export default router;