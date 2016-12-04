## arge

Currently, only purpose of this repo is to teach its programmers MEAN stack.

# how to deploy

Front-end and back-end are deployed separately.

After pulling the repo:

    cd front-end
    npm install
    npm start

And front end will start on localhost:3000

    cd back-end
    npm install
    node server.js

Aaand back end will be running on localhost:2999

# dev notes
* if you have docker and docker-compose, you don't need anything to run. execute `docker-compose up` and go to localhost:8080

otherwise;


* mongodb and express should be available for back-end to work.
* x origin site requests should be allowed in order for back-end and front-end to communicate.
