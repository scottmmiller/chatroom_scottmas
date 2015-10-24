var app = angular.module('chatroom');

app.service('parseService', function($http){

    this.getData = function(){
        //You'll need to change this url to your local server GET endpoint
        //return $http.get('https://api.parse.com/1/classes/chat?order=-createdAt')
        return $http.get('http://localhost:3000/get')
    };

    this.postData = function(message){
        //You'll need to change this url to your local server POST endpoint
        return $http.post('http://localhost:3000/post', {text: message});
        //return $http.post('https://api.parse.com/1/classes/chat', {text: message})
    };

});
