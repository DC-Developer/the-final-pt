const express = require('express');
oauth = express();
const db = require("../models");
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

oauth.post("/facebook", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

oauth.post("/google", (req, res) => {
    console.log("req.body from the server", req.body);
    res.send(req.body);
});




module.exports = oauth; 