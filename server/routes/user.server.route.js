// ./express-server/routes/user.server.route.js
import express from 'express';
//import controller file
import User from "../models/user.server.model";
// get an instance of express router
const router = express.Router();

router.post('/add', (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        edipi: req.body.edipi,
        rank: req.body.rank,
        squadron: req.body.squadron
    });
    newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
});
export default router;