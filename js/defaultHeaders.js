var app = angular.module('chatroom');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      return config;
    }
  };
});
