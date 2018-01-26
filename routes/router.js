const express = require('express');
router = express();
const db = require("../models");
const mongoose = require('mongoose');



router.get("/hello", (req, res) => {
    res.send({ message: "Start Coding You Lazy Piece of Shit!" });
});

router.get("/all", (req, res) => {
    db.User
        .find({})
        .then(data => {res.send(data)})
        .catch(err => {
            console.log(err);
        });
});

router.get("/seed", (req, res) => {
    
    db.User
        .create({
            firstName: "Dion",
            lastName: "Cavanaugh",
            email:'dcdeveloper26@gmail.com',
            type: 'admin',
            date: new Date(Date.now())
            })
        .then(data => console.log(data))
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;