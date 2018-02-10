const express = require('express');
oauth = express();
const db = require("../models");
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//require the config here
const config = require('../config/config');

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

oauth.post("/register", (req, res) => {
    var hashed_password = bcrypt.hashSync(req.body.password, 8);

    db.User
        .create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashed_password
        })
        .then(user => {
            //here sign the unique user id
            var token = jwt.sign({id:user._id}, config.secret, {
                expiresIn: 86400//expires in 24 hours
            });
            res.status(200).send({auth: true, token: token});
        })
        .catch(err => console.log(err));//add a server status response number later on
});

oauth("/login", (req, res) => {
    
});



module.exports = oauth; 