const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

var config = require('./lib/config.map');

// parses POST bodies.
app.use(bodyParser.urlencoded( {extended: true} ));

// precedence matters!
app.use(require('./lib/user/route'));

MongoClient.connect(config.mongoUrl, function name(err, database) {
    if (err) {
        console.error(err)
    }
    else { // do not bootstrap back-end if db is not available
        app.listen(2999, function name() {
            console.log("Listening on port 2999");
        });
        database.close();
    }   
});