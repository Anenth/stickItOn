'use strict';
/*global $ */

angular.module('StickItOnApp')
.controller('MainCtrl', function ($scope, Tabservice) {

  /* get all the tabs data*/
  function getAllTabs(){
    Tabservice.getTabs().then(function(response){
    for(var i in response.data)
      console.log(response.data[i])
      $scope.recentData(i,response.data[i].hashtags);
      $scope.Tabs = response.data;
    });
  }


  getAllTabs();

  $scope.newTab = function(){
    var data = {
      title : $scope.inputTitle,
      hashtags : $scope.inputTags
    };
    Tabservice.newTab($.param(data)).then(function(){
      $scope.Tabs.push(data);
    });
  };
  $scope.delete = function(index, hashtags){
    $scope.Tabs.splice(index, 1);
    Tabservice.deleteTab(hashtags);
  };
  $scope.bestData = function(index, hashtags){
    Tabservice.getBestData(hashtags).then(function(response){
      console.log(response.data[0]);
      $scope.Tabs[index].data =response.data[0];
    });
  };
  $scope.recentData = function(index, hashtags){
    Tabservice.getRecentData(hashtags).then(function(response){
      $scope.Tabs[index].data =response.data[0];
    });
  };
});
