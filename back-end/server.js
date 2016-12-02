var config = require('./lib/config.map');

const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const app = express();

// precedence matters!
app.use(require('./lib/user/route'));

mongoClient.connect(config.mongoUrl, function (err, database) {
    if (err) {
        console.error(err)
    }
    else { // do not bootstrap back-end if db is not available
        app.listen(config.port, function name() {
            console.log("Listening on port 3000");
        });
	//TO-DO
	//Please add comment here :)
        //database.dropDatabase();
        database.close();
    }   
});
