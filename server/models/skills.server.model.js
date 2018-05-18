import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    edipi: {
        type: String,
    },
    skillName: {
        type: String,
    },
    skillValue: {
        type: String,
    },
    interestValue: {
        type: String
    }
});

export default mongoose.model('Skill', Schema)