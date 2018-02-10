const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
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

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;

