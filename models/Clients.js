const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    height: {
        type: String,
        require: true
    },
    weight: {
        type: String,
        require: true
    },
    bodyfat: {
        type: String,
        require: true
    },
    date: {
        type: Date, default: Date.now
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

