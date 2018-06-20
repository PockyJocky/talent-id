import express from 'express';

import { getSkills } from "../controllers/skill"

const router = express.Router();

router.get('/', (req, res) => {
    getSkills()
        .then( skills => res.json(skills) )
        .catch( err => res.status(500).json(err) )
});

export default router;