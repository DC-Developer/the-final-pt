const express = require('express');
router = express();
const db = require("../models");
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const moment = require('moment');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/all", (req, res) => {
    db.User
        .find({})
        .then(data => {res.send(data)})
        .catch(err => {
            console.log(err);
        });
});
router.get("/user/:id", (req, res) => {
    var user_id = req.params.id;

    const decoded_id = jwt.verify(user_id, config.secret, function(err, decoded){
        if (err)
        return res.status(500).send({ auth: false, message: "Failed to verify id token..." });

        return decoded.id;
    });

    db.User
        .findById(decoded_id)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => console.log(err));


});

router.get("/userclients", (req, res) => {
    db.User
        .find({})
        .then(data => {res.send(data)})
        .catch(err => {
            console.log(err);
        });
});

router.post("/client", (req, res) => {

    const client = req.body;
    // const userId = req.body.currentUser;

    console.log('client: ',client);
    //take the client with the req.body and decode the userId and then save
    //that into client before querying the database below

    const decoded_client_userId = jwt.verify(client.userId, config.secret, function(err, decoded) {
        if (err) 
        return res.status(500).send({ auth: false, message: "Failed to authenticate client userId." });

        return decoded.id;
    });
    //now after retrieving the decoded client userId, store it into the client variable
    client.userId = decoded_client_userId;

    console.log('client.userId: ', client.userId);
    console.log(client);
    //save the mutated client to the database
    db.Client
        .create(client)
        .then(savedClient => {
            console.log("database: ", savedClient);
              
            //now query db for the specific User and update that user by pushing the client to them
            return db.User.findOneAndUpdate({ _id: savedClient.userId }, { $push: { clients: savedClient._id } }, { new: true } );

        })
        .catch(err => res.status(422).json(err));

});
router.get('/clients/:id', (req, res) => {
//first take the id from the params, and then decode the jwt

const id = req.params.id;
const decoded_id = jwt.verify(id, config.secret, function(err, decoded) {
        if (err)
        return res.status(500).send({ auth: false, message: "Failed to verify id token..." });
        
        return decoded.id;
});
console.log('decoded id: ', decoded_id);

    db.Client 
        .find({ userId: decoded_id })
        .then(clients => {

            for(let i=0; i<clients.length; i++){
                clients[i].formatted_date = clients[i].date.getMonth()+1 + "-" + clients[i].date.getDate() +"-"+ clients[i].date.getFullYear();
            }

            res.json(clients);
        })
        .catch(err => res.status(502).json(err));


});
//finish update route
router.put('/clients/:id', (req, res) => {

    var client_id = req.params.id;
    var clientData = req.body;
    console.log('client id received from server: ', client_id);
    console.log("clientData from server: ", clientData);

    db.Client
        .findByIdAndUpdate( client_id , { $set: clientData }, { new: true })
        .then(client => {
            console.log("db client: ", client);
        })
        .catch(err => res.status(502).json(err));

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
router.delete("/client/:id", (req, res) => {
    console.log("client id to be deleted: ", req.body.id);
    var id = req.body.id;

    db.Client
        .findByIdAndRemove(id)
        .then(client => console.log("db client deleted: ", client))
        .catch(err => res.status(502).json(err));

})


module.exports = router;