const express = require('express');
router = express();
const db = require("../models");


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


module.exports = router;