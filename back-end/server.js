const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const app = express();

var config = require('./lib/config.map');

// precedence matters!
app.use(require('./lib/user/route'));

mongoClient.connect(config.mongoUrl, function name(err, database) {
    if (err) {
        console.error(err)
    }
    else { // do not bootstrap back-end if db is not available
        app.listen(2999, function name() {
            console.log("Listening on port 2999");
        });
        //database.dropDatabase();
        database.close();
    }   
});