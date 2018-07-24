import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Profile = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    unit: {
        type: String
    },
    rank: {
        type: String
    },
    skills: {
        type: [String],
        required: true
    },
    experiences: [
        {
            title: {
                type: String,
                required: true
            },
            location: {
                type: String
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            joint: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    education: [
        {
            school: {
                type: String,
                required: true
            },
            location: {
                type: String
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            description: {
                type: String
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });

export default mongoose.model('Profile', Profile);