const express = require('express');
router = express();
const db = require("../models");
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var config = require('../config/config');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.get("/hello", (req, res) => {
    res.send({ message: "This is the data pipe, you Lazy Piece of Shit!" });
    
});

router.get("/all", (req, res) => {
    db.User
        .find({})
        .then(data => {res.send(data)})
        .catch(err => {
            console.log(err);
        });
});

router.post("/client", (req, res) => {
    const client = req.body;
    const userId = req.body.currentUser;
//save the client to the database
    db.Client
        .create(client)
        .then(savedClient => {
            console.log("database: ", savedClient);
            //now query db for the specific User and update that user by pushing the client to them
            var decoded = null;

            // jwt.verify(savedClient.userId, config.secret, function(err, decoded){
            //     if (err) {
            //         return res.status(500).send({auth: false, message: "Failed to authenticate token."});
            //     }
            //     // if everything good, save to request for use in other routes

            //     console.log("decoded id: ", decoded.id);
            //     decoded = decoded.id;
            // });
            return db.User.findOneAndUpdate({ }, { $push: { clients: savedClient._id } }, { new: true } );


        })

        .catch(err => res.status(422).json(err));

});
router.get('/clients', (req, res) => {
    // const dbClients ;
    //query the database

    db.Client
        .find({})
        .then(clients => res.send(clients))
        .catch(err => res.status(502).json(err));

    // res.send({ clients: dbClients });
    //^ it's really important that you send the response as an object

});
router.post("/facebook", (req, res) => {
    console.log("facebook from router: ", req.body);
    res.send(req.body);

    //remember to save the res from fb to db
});

router.post("/google", (req, res) => {
    console.log("google from router", req.body);
    res.send(req.body);

    //remember to save response from google to db
});




router.post("/seed", (req, res) => {
    
    db.User
        .create({
            firstName: "Dion",
            lastName: "Cavanaugh",
            email:'dcdeveloper26@gmail.com',
            password: 'admin',
            })
        .then(data => console.log(data))
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;