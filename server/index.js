const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const router = require('../routes/router');
const oauth = require('../routes/oauth');  
const db = require("../models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://root:root@ds111478.mlab.com:11478/pt_applicationes";
var mlabDB ;
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pt_applicationes", (err, database) => {
    if (err) throw (err)
  
    console.log("Connected to db");
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use("/api", router);
app.use("/oauth", oauth);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable cors 
app.use(cors());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

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
