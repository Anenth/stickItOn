'use strict';
/*global $ */

angular.module('StickItOnApp')
.controller('MainCtrl', function ($scope, Tabservice) {

  /* get all the tabs data*/
  function getAllTabs(){
    Tabservice.getTabs().then(function(response){
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
  $scope.delete = function(index,hashtags){
    $scope.Tabs.splice(index, 1);
    Tabservice.deleteTab(hashtags);
  };
});
