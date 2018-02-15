const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//need to make a relational database, so that only the associated clients for each user
//shows up on the client side


const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    clients: [
        {
          type: Schema.Types.ObjectId,
          ref: "Client"
        }
      ],
    date: {
        type: Date, default: Date.now
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;