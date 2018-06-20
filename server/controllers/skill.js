import Skill from '../models/skill';

export function getSkillId(skillName) {
    return Skill.findOne({ name: skillName }, '_id', { upsert: true })
        .then( id => id || addSkill({ name: skillName }) );
}

export function addSkill(skill) {
    const newSkill = new Skill(skill);
    return newSkill.save();
}

export function getSkills() {
    return Skill.find({}).exec()
        .then( ({ _id, ...skill }) => ({ ...skill }) );
}