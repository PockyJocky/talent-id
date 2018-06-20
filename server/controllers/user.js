import User from '../models/user';
import { getSkillId } from './skill'

export function addUser(user) {
    const skillPromises = user.skills.map( skill => {
        return getSkillId(skill.name)
            .then( id => ({
                skillId: id,
                interest: skill.interest,
                proficiency: skill.proficiency
            }))
    });

    return Promise.all(skillPromises)
        .then( skills => {
            const newUser = new User({ ...user, skills });
            return newUser.save();
        })
}

export function getUsers() {
    return User.find({}).exec()
        .then( users => users.map( user => user.toObject() ) )
        .then( users => users.map( ({ _id, __v, ...user }) => user ) )
}

export function getUserById(edipi) {
    return User.find({ edipi }).exec()
        .then( ({ _id, ...user }) => ({ ...user }) );
}