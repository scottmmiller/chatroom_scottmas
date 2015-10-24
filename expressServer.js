var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // for parsing application/json

app.use(function(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.startServer = function(){
    app.listen(3000, function () {
        console.log('Simple chatroom server listening at http://localhost:3000');
    });
};


module.exports = app;