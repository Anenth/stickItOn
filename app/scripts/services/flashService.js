'use strict';

angular.module('StickItOnApp')
.service('Flashservice', function($rootScope) {
  return {
    show: function(message,type) {
      $rootScope.flash = message;
      $rootScope.flashType = type;
    },
    clear: function() {
      $rootScope.flash = '';
    }
  };
});
