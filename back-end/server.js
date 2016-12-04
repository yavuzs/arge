const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const app = express();

var config = require('./lib/config.map');

// precedence matters!
app.use(require('./lib/user/route'));

mongoClient.connect(config.mongoUrl, function (err, database) {
    if (err) {
        console.error(err)
    }
    else { // do not bootstrap back-end if db is not available
        app.listen(config.port, function() {
            console.log("Listening on port 3000");
        });
        database.close();
    }   
});
