import express from 'express'

import * as skillController from "../controllers/skills.server.controller"

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    skillController.addSkill(req, res);
});

router.get('/getAll', (req, res) => {
    console.log(req.body);
    skillController.fetchSkills(req, res);
});
export default router;