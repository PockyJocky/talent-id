import Skill from '../models/Skill';

function getSkillValidator(name) {
    return name.toLowerCase();
}

export function getSkillId(skillName) {
    const validator = getSkillValidator(skillName);
    return Skill.findOne({ validator }, '_id name', { upsert: true })
        .then( id => id || addSkill({ name: skillName, validator }) )
}

export function addSkill(skill) {
    const newSkill = new Skill(skill);
    return newSkill.save();
}

export function getSkills() {
    return Skill.find({}).lean().exec()
        .then( skills => skills.map( ({ name }) => name ) );
}