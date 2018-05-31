// ./express-server/controllers/user.server.controller.js
//import models
import User from '../models/user.server.model';
import { db } from '../app'
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

export const findUserBySkill = (req, res) => {
    let query = { skill : req.body.skill };
    let result;
    const joinedTable = db.collection('skills');

    result = joinedTable.find(query).toArray((err, res) => {
        if(err) throw err;
        return res;
    });

    result.then(body => res.json(body))
        .then(body => console.log("Retrieved: " + body + " from the database"))
        .catch(err => console.log(err))
}