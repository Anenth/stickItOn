'use strict';

angular.module('StickItOnApp')
.directive('youtube', function ($sce) {
  function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[7].length==11){
      return match[7];
    }else{
      console("Url incorrect");
    }
  }
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:200px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen> </iframe></div>',
    link: function (scope) {
      var youtubeID = youtube_parser(scope.code);
      scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + youtubeID);
    }
  }
});
