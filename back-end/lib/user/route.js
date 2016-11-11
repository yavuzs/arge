const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const express = require('express');
const app = module.exports = express();

// parses POST bodies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

var userDB = require('./db.interface');

app.post('/user/login', function(req, res) {
    userDB.logUserIn(req.body.username, req.body.password).then(function(result) {
        res.send(result);
    });
});

app.post('/user/signup', function(req, res) {
    userDB.saveUser(req.body.username, req.body.password, req.body.email).then(function(result) {
        res.send(result);
    })
});

app.get('/user/get', function(req, res) {
    userDB.getUserByName(req.query.username).then(function(result) {
        res.send(result);
    })
});