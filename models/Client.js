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
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    bodyfat: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date, default: Date.now
    }
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;

