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
              <SongList2 source={source}/>
          )
        })
      }
    </div>
  </div>
 )
}

export default SongLists

// import React from 'react'
//
// const SongLists = props => {
//   return (
//   <div>
//     <div id="header"><h2>Sound List</h2></div>
//     <div id="main">
//       <div id="content-1">
//         <h3 className="soundSource">SoundCloud</h3>
//         <ul>
//           <li repeat="track in soundCloudTracks">
//             <span click="playTrack(track, 'soundcloud')">Title</span>
//             <br />
//             <img className="artwork" src="#" />
//           </li>
//         </ul>
//       </div>
//       <div id="content-2">
//         <div id="content-2-1">
//           <h3 class="soundSource">YouTube</h3>
//           <ul>
//             <li repeat="track in youTubeTracks">
//               <span click="playTrack(track, 'youtube')">Title</span>
//               <br />
//               <img className="artwork" src="#" />
//             </li>
//           </ul>
//         </div>
//         <div id="content-2-2">
//         <h3 className="soundSource">Spotify (beta)</h3>
//           <ul>
//             <li repeat="track in spotifyTracks">
//               <span click="playTrack(track, 'spotify')">TrackName</span>
//               <br />
//               <img className="artwork" src="#" />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
//  )
// }
//
// export default SongLists
