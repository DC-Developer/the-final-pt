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
    console.log("facebook from server: ", req.body);
    res.send(req.body);

    //remember to save the res from fb to db
});

oauth.post("/google", (req, res) => {
    console.log("req.body from the server", req.body);
    res.send(req.body);

    //remember to save response from google to db
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

oauth.post("/login", (req, res) => {
    
    db.User
        .findOne({ email: req.body.email })
        .then(user => {
            var check_password = bcrypt.compareSync(req.body.password, user.password);
            //change the res.status...send() later
            if (!check_password) return res.status(401).send({auth: false, token: null});
           
            var token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400//24 hours
            })
             res.status(200).send({auth: true, token: token});
        })
        .catch(err => {
            return res.status(500).send('Error on the server');
        })


});



module.exports = oauth; 