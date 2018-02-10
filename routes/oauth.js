const express = require('express');
oauth = express();
const db = require("../models");
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

oauth.use(bodyParser.json());
oauth.use(bodyParser.urlencoded({ extended: false }));

oauth.post("/facebook", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

oauth.post("/google", (req, res) => {
    console.log("req.body from the server", req.body);
    res.send(req.body);
});

oauth("/register", (req, res) => {
    var hashed_password = bcrypt.hashSync(req.body.password, 8);

    db.User
        .create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashed_password
        })
        .then(user => {

        })
        .catch(err => console.log(err));//add a server status response number later on

});

oauth("/login", (res, res) => {
    
});



module.exports = oauth; 