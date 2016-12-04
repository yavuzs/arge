const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const express = require('express');
const app = module.exports = express();

// parses POST bodies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

// routers
app.use('/user', require('./lib/user/route'));

var config = require('./lib/config.map');

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

app.use('/', function(req, res, next) {
    // no router handled the request, so this is an invalid one
    console.log('Invalid req: ' + req['url'] + ' (' + req['method'] + ')');
    res.status(404).send();
});