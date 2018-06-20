import express from 'express';

import { getUsers, getUserById, addUser } from "../controllers/user"

const router = express.Router();

router.get('/', (req, res) => {
    getUsers()
        .then( users => res.json(users) )
        .catch( err => res.status(500).json(err) )
});

router.get('/:id', (req, res) => {
    getUserById(req.params.id)
        .then( user => res.json(user) )
        .catch( err => res.status(500).json(err) )
    });
    
    router.post('/', (req, res) => {
        addUser(req.body)
        .then( user => res.json(user) )
        .catch( err => console.log(err) )
        .catch( err => res.status(500).json(err) )
});

export default router;