// ./express-server/controllers/user.server.controller.js
import mongoose from 'mongoose';
//import models
import User from '../models/user.server.model';
export const addUser = (req,res) => {
    const newUser = new User(req.body);
    newUser.save((err,User) => {
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        return res.json({'success':true,'message':'Todo added successfully',User});
    })
}


