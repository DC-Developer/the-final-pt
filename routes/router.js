const express = require('express');
router = express();
const db = require("../models");


router.get("/hello", (req, res) => {
    res.send({ message: "Start Coding You Lazy Piece of Shit!" });
});

router.post("/seed", (req, res) => {
   var UserSeed = [
        {
          firstName: "Dion",
          lastName: "Cavanaugh",
          email:'dcdeveloper26@gmail.com',
          password: 'admin',
          date: new Date(Date.now())
        },
        {
          firstName: "Troy",
          lastName: "Slaten",
          email:'dcavanaugh2525@gmail.com',
          password: 'admin',
          date: new Date(Date.now())
        }
      ];

      db.User
        .collection.insertMany(UserSeed)
        .then(data => {
            console.log(data.insertedIds.length + " records inserted!");
        })
        .catch(err => {
            console.log(err);
        });

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