const express = require('express');
router = express();
const db = require("../models");


router.get("/hello", (req, res) => {
    res.send({ message: "Start Coding You Lazy Piece of Shit!" });
});



module.exports = router;