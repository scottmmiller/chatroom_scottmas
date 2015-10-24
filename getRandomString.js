module.exports = getRandomString;

//A simple function that returns an big random string which is mostly guaranteed to be unique.
function getRandomString(){
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
    var result = [];
    for (var i = 50; i > 0; --i) result.push(chars[Math.round(Math.random() * (chars.length - 1))]);
    return result.join('');
}
