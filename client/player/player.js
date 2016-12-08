'use strict';

app.component('player', {
  template:
      '<iframe auto_play="true" controls ng-src="{{currentlyPlaying}}" frameborder="0"></iframe>',
  controller: function($scope, $rootScope, $sce) {
    $rootScope.$on('playTrack', function(event, data) {
      // create different routes for youtube/soundcloud/etc.
      if (data.service === "soundcloud") {
        var trackUrl = data.track.stream_url;
        trackUrl = "https://w.soundcloud.com/player/?url=" + trackUrl;
        trackUrl = trackUrl.split("/").slice(0,9).join("/");
        $scope.currentlyPlaying = $sce.trustAsResourceUrl(trackUrl + "?auto_play=true");
      } else if (data.service === "youtube") {
        var videoId = data.track.id.videoId;
        var trackUrl = "https://www.youtube.com/embed/" + videoId + "/?autoplay=1";
        $scope.currentlyPlaying = $sce.trustAsResourceUrl(trackUrl);
      } else if (data.service === "spotify") {
        var trackUrl = "https://embed.spotify.com/?uri=" + data.track.uri;
        $scope.currentlyPlaying = $sce.trustAsResourceUrl(trackUrl);
      }
    });
  }
});
