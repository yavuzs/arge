// user = { username: bla, password: bla, created: bla, lastSeen: bla, admin: false }

const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = module.exports = express();

var config = require('../config.map');

var db ;

MongoClient.connect(config.mongoUrl, function (err, database) {
    if (err) {
        console.error(err);
        return ;
    }
    db = database;
});

var getUserByName = function(name) {
    return db.collection(config.userSchema).find(name);
};

module.exports = {
    
    saveUser: function(user) {
        db.collection(config.userSchema).save(user);
    },

    logUserIn: function(user) {
        if (getUserByName(user.username) !== undefined) {
            return true;
        }

        console.error(username + " is not registered.");
        return false;
    },

    getUserByName: function(name) {
        return getUserByName(name);
    }

}