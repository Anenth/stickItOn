'use strict';

angular.module('StickItOnApp')
.controller('MainCtrl', function ($scope, Tabservice) {
  Tabservice.getTabs();
  $scope.addNew = function(){
    $scope.tagAddNew = true;
  };
  $scope.newTab = function(){
    Tabservice.newTab({
      title : $scope.inputTitle,
      hashtags : $scope.inputTags
    });
  }
});
