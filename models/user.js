import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    username: {
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9]+$/, 'Username must be alphanumeric']
    },
    image: {
        type: String
    }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
