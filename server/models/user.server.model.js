import mongoose from 'mongoose';
var Schema = mongoose.Schema({
    createdAt:{
        type: Date,
        default: Date.now
    },
    firstName: String,
    lastName: String,
    edipi: String,
    rank: String,
    squadron: String,
});
export default mongoose.model('User', Schema);