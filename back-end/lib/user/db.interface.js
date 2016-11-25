const mongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');

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
};

var computeHash = function(str, salt) {
    return crypto.createHash('sha256').update(str + salt).digest('hex');
};

var createUser = function(username, password, email) {
    var date = Date.now();
    var salt = crypto.randomBytes(8).toString('hex');
    
    password = computeHash(password, salt);

    var user = {
        username: username,
        password: password, // hashed password
        salt: salt,
        email: email,
        created: date,
        lastSeen: date,
        isAdmin: false
    };

    return user;
};

module.exports = {
    
    saveUser: function(username, password, email) {
        var deferred = Q.defer();
        
        findOne({username: username}).then(function(result) {
            if (result !== null) { //{reason: 'Username is already taken :(', res: false}
                deferred.resolve('Username is already taken :(');
            }
            else {
                findOne({email: email}).then(function(result) {
                    if (result !== null) {
                        deferred.resolve('Email address is already in use');
                    }
                    else {
                        var user = createUser(username, password, email);
                        save(user);
                        deferred.resolve(true);
                    }
                });
            }
        });

        return deferred.promise;
    },

    logUserIn: function(username, password) {
        var deferred = Q.defer();
        var query = { username: username };
        // TODO create a session token and return that to user
        findOne(query).then(function(user) {
            if (user !== undefined && user !== null
                && user.password === computeHash(password, user.salt)) {
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