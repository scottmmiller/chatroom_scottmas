var app = require('./expressServer.js')
var getRandomString = require('./getRandomString.js');
var persistentDb = require('./wrappedPersistentDb.js');


var inMemoryDB = {
    "meta": {
        "engine": "inMemoryDatabase",
        "dbName": "ChatMessagesDatabase"
    },
    "data":{
        "messages": [
            {
                "text": "The first message",
                "createdAt": 1445624476487,
                "objectId": "nEPVUL4EusIUMRxAeDPH5xOsZBK9"
            },
            {
                "text": "The second message",
                "createdAt": 1445624876487,
                "objectId": "NdQxqDK6OZgymJbb5IrRCsgjS5Xn"
            }

        ]
    }
};

app.get('/get', function (request, response) {
    console.log("Get request received");
    //response.json({whatever: 'you put here gets sent back to the browser'});
    response.json({results: persistentDb.getData('/data/messages')});
});

app.post('/post', function(request, response){
    console.log("post request received with data:", request.body)

    persistentDb.pushToArray('/data/messages', {
        text: request.body.text,
        createdAt: Date.now(),
        objectId: getRandomString()
    });

    //TODO: Save the data that the browser just sent. You can access the info that was sent down inside response.body
    //TODO: Remember to save the time the chat message was created (using Date.now) and give the chat message an objectId using getRandomString()

    //Here we send back a notification to the server telling the browser that the data was successfully saved. This isn't strictly
    // necessary but it's best practice to give some sort of confirmation if things happened successfully
    response.json({success: true});
});

app.startServer();