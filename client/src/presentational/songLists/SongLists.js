import React from 'react'
import SongList from './songList/SongList'
import SongList2 from './songList2/SongList2'

const SongLists = ({searchResults, playTrack}) => {
  const sources = searchResults.sources || []
  return (
  <div>
    <div id="header"><h2>Sound List</h2></div>
    <div id="main">
      {
        sources.map(source => {
          return (
            source.divId === "content-1" ?
              <SongList  source={source}
                         playTrack={playTrack}
              /> :
              <SongList2 source={source}
                         playTrack={playTrack}
              />
          )
        })
      }
    </div>
  </div>
 )
}

export default SongLists
