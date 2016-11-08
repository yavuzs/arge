const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = module.exports = express();

var config = require('../config.map');
var userDB = require('./db.interface');

app.get('/login/:username/:password', function(req, res) {
    // TODO create a user
    userDB.logUserIn({ user: req.params.username });
    res.send('Naber ' + req.params.username);
});

app.get('/signup/:username/:password', function(req, res) {
    
    var user = {
        username: req.params.username,
        password: req.params.password,
        created: Date.now(),
        lastSeen: Date.now(),
        isAdmin: false
    }

    userDB.saveUser(user);

    res.send('Successfully registered.');
});