import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: String
}, { versionKey: false });

export default mongoose.model('Skill', Schema)