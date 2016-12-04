const MongoClient = require('mongodb').MongoClient;
const router = module.exports = require('express').Router();

var userDB = require('./db.interface');

router.post('/login', function(req, res) {
    userDB.logUserIn(req.body.username, req.body.password).then(function(result) {
        console.log("Login res: " + result);
        res.send(result);
    });
});

router.post('/signup', function(req, res) {
    userDB.saveUser(req.body.username, req.body.password, req.body.email).then(function(result) {
        console.log(result);
        res.send(result);
    })
});

router.get('/get', function(req, res) {
    userDB.getUserByName(req.query.username).then(function(result) {
        console.log("Get res: " + result);
        res.send(result);
    })
});