import User from '../models/user';
import { getSkillId } from './skill'


function cleanSkills(doc) {
    const { _id, ...obj } = doc;
    obj.skill = obj.skill && obj.skill.name
    return obj;
}

function cleanUserDoc(doc) {
    const { _id, __v, ...user } = doc.toObject();
    user.skills = user.skills && user.skills.map( cleanSkills );
    return user;
}

export function addUser(user) {
    const skillPromises = user.skills.map( skill => {
        return getSkillId(skill.name)
            .then( id => ({
                skill: id,
                interest: skill.interest,
                proficiency: skill.proficiency
            }))
    });

    return Promise.all(skillPromises)
        .then( skills => {
            const newUser = new User({ ...user, skills });
            return newUser.save()
                .then( doc => newUser.populate('skills.skill') )
                .then( cleanUserDoc )
        })
}

export function getUsers() {
    return User.find({}).populate('skills.skill').exec()
        .then( docs => docs.map( cleanUserDoc ) );
}

export function getUserById(edipi) {
    return User.find({ edipi }).populate('skills.skill').lean().exec()
        .then( cleanUserDoc );
}