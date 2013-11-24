'use strict';

angular.module('StickItOnApp')
.service('Tabservice', function($http, Flashservice) {
  var authEmail = 'anenthvishnu@gmail.com';
  var url = 'http://gcdc2013-keeptabson.appspot.com/tag/';
  var sendRequestToServer = function(type, url, data, alert){
    $http({
      method: type,
      url:url,
      data: data,
      withCredentials: true
    }).success(function(data, status){
      if(alert){
        Flashservice.show(' message ', 'success');
      }
      if(data){
        return data;
      }
    }).error(function(data){
      if(alert){
        for(var i in data){
          Flashservice.show(data[i], 'danger');
        }
      }
    });
  };
  return{
    newTab: function(data){
      sendRequestToServer('POST', url, data, true);
    },
    getTabs: function(){
       return sendRequestToServer('GET', url);
    }
  };
});
