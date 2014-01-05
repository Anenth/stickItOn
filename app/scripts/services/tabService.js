'use strict';

angular.module('StickItOnApp')
.service('Tabservice', function($http, Flashservice) {

  var url = 'http://gcdc2013-keeptabson.appspot.com/tag/';
  var sendRequestToServer = function(type, url, data, alert){

    return $http({
      method: type,
      url:url,
      data: data,
      withCredentials: true,
      cache: false,
      crossDomain: true,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function(response){
      if(alert){
        Flashservice.show(' message ', 'success');
      }
      if(response.data){
        console.log('Data received');
      }
      return response;
    }, function(response) {
      console.log('Data not received');
      if(alert){
        for(var i in response.data){
          Flashservice.show(data[i], 'danger');
        }
      }
      return response;
    });
  };
  return {
    newTab: function(data){
      return sendRequestToServer('POST', url, data, true);
    },
    getTabs: function(){
      return sendRequestToServer('GET', url);
    },
    deleteTab: function(data){
      return sendRequestToServer('DELETE', url+encodeURIComponent(data));
    },
    getBestData: function(data){
      return sendRequestToServer('GET', url + 'best/' + encodeURIComponent(data));
    },
    getRecentData: function(data){
      return sendRequestToServer('GET', url + 'recent/' + encodeURIComponent(data));
    }
  };
});
