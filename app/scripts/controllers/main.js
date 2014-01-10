'use strict';
/*global $ */

angular.module('StickItOnApp')
.controller('MainCtrl', function ($scope, Tabservice) {

  function getRecentData(index, hashtags){
    Tabservice.getRecentData(hashtags).then(function(response){
      $scope.Tabs[index].data = response.data[0];
    });
  }
  /* get all the tabs data*/
  function getAllTabs(){
    Tabservice.getTabs().then(function(response){
    $scope.Tabs = response.data;
    for(var i in $scope.Tabs)
      getRecentData(i,$scope.Tabs[i].hashtags);
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
      $scope.Tabs[index].data =response.data[0];
    });
  };

  $scope.recentData = function(index, hashtags){
    getRecentData(index, hashtags);
  };
});
