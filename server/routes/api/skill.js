import express from 'express';

const router = express.Router();

import { getSkills } from "../../controllers/skill"

router.get('/', (req, res) => {
    getSkills()
        .then( skills => res.json(skills) )
        .catch( err => res.status(500).json(err) )
});

export default router;