const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const router = require('../routes/router'); 
const db = require("../models");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://root:root@ds111478.mlab.com:11478/pt_applicationes";

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/personaltrainer_app",
  (err) => {
    if (err) throw (err)
    
    if(process.env.MONGODB_URI){
        const userSeed = [
            {
              firstName: "Dion",
              lastName: "Cavanaugh",
              email:'dcdeveloper26@gmail.com',
              type: 'admin',
              date: new Date(Date.now())
            },
            {
              firstName: "Troy",
              lastName: "Slaten",
              email:'dcavanaugh2525@gmail.com',
              type: 'admin',
              date: new Date(Date.now())
            }
          ];
        //insert the userSeed array on start up
            db
            .remove({})
            .then(() => db.collection.insertMany(userSeed))
            .then(data => {
                console.log(data.insertedIds.length + " records inserted!")
            })
            .catch(err => {
                console.log(err);
            });

    }



      console.log('connected to db');
  }
);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use("/api", router);
// Answer API requests.
// app.get('/api', function (req, res) {
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello from the custom server!"}');
// });

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
