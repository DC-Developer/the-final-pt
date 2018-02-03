const express = require('express');
router = express();
const db = require("../models");
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
//need to install body-parser and use it in all
//routing files
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

    db.Client
        .create(client)
        .then(savedClient => console.log("database: ", savedClient))
        .catch(err => res.status(422).json(err));



    // res.send(client);
    console.log("express server: ", client);


});
router.get('/clients', (req, res) => {
    const dbClients = ['Josh', 'Bilbo', 'Baggins'];
    // const dbCLients = '' ;
    //query the database





    console.log(dbClients);
    res.send({ clients: dbClients });
    //^ it's really important that you send the response as an object

});
router.post("/register", (req, res) => {
    const newUser = req.body;

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