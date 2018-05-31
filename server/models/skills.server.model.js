import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Skill = new Schema({
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
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Skill', Schema)