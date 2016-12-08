import React from 'react'

const SongList = props => {
  return (
  <div>
    <div id="header"><h2>Sound List</h2></div>
    <div id="main">
      <div id="content-1">
        <h3 class="soundSource">SoundCloud</h3>
        <ul>
          <li repeat="track in soundCloudTracks">
            <span ng-click="playTrack(track, 'soundcloud')">Title</span>
            <br />
            <img class="artwork" src="#" />
          </li>
        </ul>
      </div>
      <div id="content-2">
        <div id="content-2-1">
          <h3 class="soundSource">YouTube</h3>
          <ul>
            <li repeat="track in youTubeTracks">
              <span click="playTrack(track, 'youtube')">Title</span>
              <br />
              <img class="artwork" src="#" />
            </li>
          </ul>
        </div>
        <div id="content-2-2">
        <h3 class="soundSource">Spotify (beta)</h3>
          <ul>
            <li repeat="track in spotifyTracks">
              <span click="playTrack(track, 'spotify')">TrackName</span>
              <br />
              <img class="artwork" src="#" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
 )
}

export default SongList
