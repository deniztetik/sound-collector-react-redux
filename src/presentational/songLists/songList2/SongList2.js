import React from 'react'

const SongList2 = ({source: {srcName, divId: {divId}}}) => {
  return (
    <div id="content-2">
      <div id={divId}>
        <h3 className="soundSource">{srcName}</h3>
        <ul>
          <li repeat="track in soundCloudTracks">
            <span click="playTrack(track, 'soundcloud')">Title</span>
            <br />
            <img className="artwork" src="#" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SongList2
