import React from 'react'

const SongList = ({source: {srcName}}) => {
  return (
    <div id="content-1">
      <h3 className="soundSource">{srcName}</h3>
      <ul>
        <li repeat="track in soundCloudTracks">
          <span click="playTrack(track, 'soundcloud')">Title</span>
          <br />
          <img className="artwork" src="#" />
        </li>
      </ul>
    </div>
  )
}

export default SongList
