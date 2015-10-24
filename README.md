Local Server ChatRoom
========

This is where you create your own backend for the server, not just use an existing service. This will probably be your only introduction
to server side coding in this class and is meant only to give you a feel for it, not make you experts at it.

### Step 1: Fork and clone this repo
Self explanatory

### Step 2: Download Nodejs
Google "download nodejs" and download nodejs. Nodejs is basically javascript packaged for servers (not a browser) and will enable us to create a simple server. On the installation instructions MAKE sure you select the option to install nodejs to the path.

### Step 3: Install "nodemon"
In your terminal, first make sure you have access to node by typing "node --version". If that command returns something succesfully, then Nodejs is installed. Once you've verified nodejs is installed on the terminal, then do the following:
```
npm install -g nodemon
```
NOTE: If on a mac, you'll probably need to prefix the above command with "sudo", so it would look more like "sudo npm install ..."

### Step 4: Activate your server
You need to tell Nodejs what file it should use to start a server. Open a terminal in this repo's directory and type:
```
nodemon server.js
```
A server is now listening for requests. Also notice that if you modify server.js, the server will restart. This is because we are using "nodemon", which is a tool for development that automatically restarts the server when you have new code

### Point your browser at your server
You need to point your parseService at your new server (instead of Parse where it pointed to yesterday). Your server is located at localhost:3000, which means the GET endpoint will be located at http://localhost:3000/get and the POST endpoint will be located at http://localhost:3000/post

### Step 5: Make the GET endpoint return the correct data
In server.js there is a variable called inMemoryDB which contains all the chat logs. Modify the code to return all the messages. Remember also that on your browser you were expecting all the messages to be contained within a "results" property on the response.data object. You need to make sure your browser can handle the data the server gives it back. Remember that console.log is your best friend. 

### Step 6: Make the POST endpoint save data to the in memory database
Now you need to make sure the POST endpoint actually does something.
Make sure a new message has a createdAt property telling you when it was created. You can get a number representing the current time by invoking the function "Date.now()"
Also make sure each new post has random string for its objectId. This isn't important now but is best practice in a database of any type.

### Step 7: Repeat steps 5 and 6 with a persistent database
Now delete the variable inMemoryDB. We're going to make the data be persistent so that whenver you POST new chat messages, they get saved to disk.
Towards this end, at the top of server.js, you'll notice there's an unused variable called persistentDb.

The persistentDatabase is a little harder to work with than the in memory database but will actually save your information to the hard drive after you post data.
We need to change our POST and GET handler functions to use this persistent database.

You interact with the persistent database a lot like the in memory database but the difference is that
 instead of using dots to get deeper into the datbase you use slashes. So if you accessed the chat messages in the
  in memory database with "inMemoryDb.data.messages" you would get it with the persistent database using "persistentDb.getData('/data/messages')

Similarly, if wrote to the in memory db with "inMemoryDb.data.messages.push(newChatMessageObj)", you would accomplish the same thing
 with the persistent db by writing "persistentDb.pushToArray('/data/messages')".

If you want a better understanding of the persistent database, you can browse the documentation here: https://www.npmjs.com/package/node-json-db

Don't get worried if you find this part frustrating. Part of what we want you to learn is how to learn new libraries and databases since technology is always changing.


### Step 8: Deploy your server to the cloud
I don't expect all of you to get this far, but if you do it's time to up your game by actually pushing to a server in the cloud.
First, in a separate repo follow the tutorial specified here: https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction
Then, repeat those same steps with this repo, primarily the "heroku create" step and the "git push heroku master" step.