var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // for parsing application/json

app.use(function(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Parse-Application-Id, X-Parse-REST-API-Key');
    next();
});

app.set('port', (process.env.PORT || 3000));


app.startServer = function(){
    app.listen(app.get('port'), function() {
        console.log('Node app is running at http://localhost:' + app.get('port'));
    });

};


module.exports = app;