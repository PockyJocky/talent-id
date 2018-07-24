import express from 'express';

const router = express.Router();

import { getUsers, getUserById, addUser } from "../../controllers/user"

// Load validation
const validateRegisterInput = require('../../validation/register');

const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/new', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ edipi: req.body.edipi }).then(user => {
        if (user) {
            errors.edipi = 'EDIPI number already exists';
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                edipi: req.body.edipi,
                rank: req.body.rank,
                unit: req.body.unit
            });
        }
    });
});

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
    const { errors, isValid } = validateRegisterInput(req.body);

    //Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    addUser(req.body)
        .then( user => res.json(user) )
        .catch( err => console.log(err) )
        .catch( err => res.status(500).json(err) )
});

export default router;