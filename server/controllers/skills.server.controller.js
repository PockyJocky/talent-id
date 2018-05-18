import Skill from '../models/skills.server.model'

export const addSkill = (req, res) => {
    const newSkill = new Skill({
        edipi: req.body.edipi,
        skillName: req.body.skillName,
        skillValue: req.body.skillValue,
        interestValue: req.body.interestValue
    });
    newSkill
        .save()
        .then(skill => res.json(skill))
        .then(skill => console.log("Posted: " + skill + " to the database"))
        .catch(err => console.log(err));
};