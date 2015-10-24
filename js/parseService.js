var app = angular.module('chatroom');

app.service('parseService', function($http){

    this.getData = function(){
        //You'll need to change this url to your local server GET endpoint
        return $http.get('https://api.parse.com/1/classes/chat?order=-createdAt')
    };

    this.postData = function(message){
        //You'll need to change this url to your local server POST endpoint
        return $http.post('https://api.parse.com/1/classes/chat', {text: message})
    };

});
