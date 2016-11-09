const mongoClient = require('mongodb').MongoClient;

var config = require('../config.map');
var Q = require('q');
var db ;

mongoClient.connect(config.mongoUrl, function (err, database) {
    if (err) {
        console.error(err);
        return ;
    }
    db = database;
});

var findOne = function(query) {
    var deferred = Q.defer();

    db.collection(config.userSchema).findOne(query, function(err, result) {
        deferred.resolve(result);
    });

    return deferred.promise;
};

var find = function(query) {
    var deferred = Q.defer();

    db.collection(config.userSchema).find(query).toArray(function(err, result) {
        deferred.resolve(result);
    })

    return deferred.promise;
}

var save = function(user) {
    db.collection(config.userSchema).save(user);
}

module.exports = {
    
    saveUser: function(user) {
        var deferred = Q.defer();

        findOne({username: user.username}).then(function(result) {
            if (result !== undefined && result !== null) {
                deferred.resolve(false);
            }
            else {
                save(user);
                deferred.resolve(true);
            }
        });

        return deferred.promise;
    },

    logUserIn: function(username, password) {
        var deferred = Q.defer();
        var query = { username: username, password: password };

        findOne(query).then(function(user) {
            if (user !== undefined && user !== null) {
                user.lastSeen = Date.now();
                save(user);
                deferred.resolve(true);
            }
            else
                deferred.resolve(false);
        });

        return deferred.promise;
    },

    getUserByName: function(username) {
        var deferred = Q.defer();

        findOne({username: username}).then(function(result) {
            deferred.resolve(result);
        });

        return deferred.promise;
    }

}