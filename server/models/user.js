import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const User = new Schema({
    createdAt:{ type: Date, default: Date.now },
    edipi: String,
    firstName: String,
    lastName: String,
    rank: String,
    squadron: String,
    skills: [{
        skillId: Schema.Types.ObjectId,
        proficiency: Number,
        interest: Number,
        _id: false
    }]
}, { versionKey: false });

export default mongoose.model('User', User);