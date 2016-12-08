'use strict';

app.component('songList', {
  templateUrl: 'songList/songList.template.html',
  controller: function($rootScope, $scope, $http) {
    $scope.playTrack = function(track, service) {
      console.log(track);
      $rootScope.$emit('playTrack', {
        track: track,
        service: service
      });
    };

    var getSongs = function(query) {

      SC.get('/tracks', {
        q: query
      }).then(function(tracks) {
        $scope.soundCloudTracks = tracks;
      });


      $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: "GET",
        params: { part: "snippet",
                  q: query,
                  key: YOUTUBE_API_KEY,
                  maxResults: "10"
                }
      }).then(function(tracks) {
        $scope.youTubeTracks = tracks.data.items;
      }, function(err) {
        console.log(err);
      });

      $http({
        url: 'https://api.spotify.com/v1/search',
        method: "GET",
        params: {
          q: query,
          type: "track",
          limit: "10"
        }
      }).then(function(tracks) {
        console.log(tracks.data.tracks.items);
        $scope.spotifyTracks = tracks.data.tracks.items;
      }, function(err) {
        console.log(err);
      });

    };

    $rootScope.$on('searchEvent', function(event, data) {
      getSongs(data.query);
    });
  }
});
