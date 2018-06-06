import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const User = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    edipi: {
        type: String,
    },
    rank: {
        type: String,
    },
    squadron: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('User', User);