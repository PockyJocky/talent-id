// ./express-server/controllers/user.server.controller.js
//import models
import User from '../models/user.server.model';
export const addUser = (req,res) => {
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
        .then(user => console.log("Posted: " + user + " to the database"))
        .catch(err => console.log(err));
};


export const getUsers = (req,res) => {
    const Users = User.find({}, (err, users) => {
        if (err)
            res.send(err);
        res.json(users);
    });
    Users.then(user => console.log("Retrieved: " + user + " from the database"))
        .catch(err => console.log(err))
}