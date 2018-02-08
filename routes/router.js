const express = require('express');
router = express();
const db = require("../models");
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
//save the client to the database
    db.Client
        .create(client)
        .then(savedClient => console.log("database: ", savedClient))
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
router.post("/register", (req, res) => {
    const newUser = req.body;


    var hashedPassword = bcrypt.hashSync(req.body.password, 8);


    var token = jwt.sign({id:user._id}, config.secret, {
        expiresIn: 86400//expires in 24 hours
    });
    res.status(200).send({auth: true, token: token});


    console.log(newUser);
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