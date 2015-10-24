var JsonDB = require('node-json-db');
var db = new JsonDB('PersistentChatDatabase', true, true);

db.pushToArray = function(path, toSave){
  var array = db.getData(path);
    db.push(path + '[' + array.length + ']', toSave)
};

module.exports = db;