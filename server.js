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
   //  console.log("Get request received");
   response.json(inMemoryDB.data.messages);
});

app.post('/post', function(request, response){
    console.log("post request received with data: ", request.body.text);

   var newChatInfo = {
      text: request.body.text,
      createdAt: Date.now(),
      objectId: getRandomString()
   };
      console.log(newChatInfo);
   inMemoryDB.data.messages.push(newChatInfo);


    //TODO: Save the data that the browser just sent. You can access the info that was sent down inside request.body
    //TODO: Remember to save the time the chat message was created (using Date.now) and give the chat message an objectId using getRandomString()

   response.json({success: true}); //this sends a simple notification to the browser that the info was saved succesfully.
});

app.startServer();
