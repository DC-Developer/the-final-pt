const express = require('express');
oauth = express();
const db = require("../models");
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


oauth.post("/facebook", (req, res) => {
    res.send(req.body);
});

oauth.post("google", (req, res) => {
    res.send(req.body);
});




module.exports = oauth; 