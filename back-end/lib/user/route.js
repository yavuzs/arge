const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const express = require('express');
const app = module.exports = express();

// parses POST bodies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

var config = require('../config.map');
var userDB = require('./db.interface');

var createUser = function(username, password) {
    var date = Date.now();

    var user = {
        username: username,
        password: password,
        created: date,
        lastSeen: date,
        isAdmin: false
    };

    return user;
};

app.post('/user/login', function(req, res) {
    userDB.logUserIn(req.body.username, req.body.password).then(function(result) {
        res.send(result);
    });
});

app.post('/user/signup', function(req, res) {
    var user = createUser(req.body.username, req.body.password);

    userDB.saveUser(user).then(function(result) {
        res.send(result);
    })
});

app.get('/user/get', function(req, res) {
    userDB.getUserByName(req.query.username).then(function(result) {
        res.send(result);
    })
});