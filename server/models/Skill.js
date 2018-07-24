import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: String,
    validator: String
}, { versionKey: false });

export default mongoose.model('Skill', Schema)