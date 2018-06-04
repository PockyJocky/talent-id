import express from 'express'

import * as skillController from "../controllers/skills.server.controller"

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    skillController.addSkill(req, res);
});

router.get('.allSkill', (req,res) => {
    console.log(req.body)
    skillController.fetchAllSkills(req,res)
})
export default router;