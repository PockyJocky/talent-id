import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';

// Load Validation
const validateProfileInput = require('../../validation/profile');
const validateExperienceInput = require('../../validation/experience');
const validateEducationInput = require('../../validation/education');

// Load profile model
const Profile = require('../../models/Profile');

//Load user profile
const User = require('../../models/User');

// @route GET api/profile/test
// @desc Tests profile route
// @access public
router.get('/test', (req, res) => res.json({msg: 'Profile Works'}));

// @route GET api/profile
// @desc Get user's profile
// @access public
router.get('/:id', ( req, res ) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if(!profile){
                errors.noprofile = 'No profile found for id entered';
                return res.status(404).json(errors)
            }
            res.json(profile)
        })
        .catch(err => res.status(404).json(err));
});

// @route GET api/profile/all
// @desc gets all profiles
// @access public
router.get('/all', (req, res) => {
    const errors = {};

    Profile.find()
        .populate('user', ['name'])
        .then(profiles => {
        if(!profiles){
            errors.profiles = 'There are no profiles';
            return res.status(404).json(errors);
        }
            res.json(profiles);
        })
        .catch(err => res.status(404).json({profile: 'There are no profiles to populate'}));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get('/user/:user_id', (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.params.user_id })
        .populate('user', ['name'])
        .then(profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this user';
                res.status(404).json(errors);
            }

            res.json(profile);
        })
        .catch(err =>
            res.status(404).json({ profile: 'There is no profile for this user' })
        );
});

export default router;