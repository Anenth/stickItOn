'use strict';

angular.module('StickItOnApp')
.controller('MainCtrl', function ($scope, Tabservice) {
  Tabservice.getTabs();
  $scope.addNew = function(){
    $scope.tagAddNew = true;
  };
  $scope.newTab = function(){
    Tabservice.newTab($.param({
      tabTitle : $scope.inputTitle,
      tabTags : $scope.inputTags
    }));
  }
});
