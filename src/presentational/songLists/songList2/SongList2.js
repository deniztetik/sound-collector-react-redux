import React from 'react'

const SongList2 = ({source: {srcName, results, divId: {divId}}, playTrack}) => {
  results.items = results.items || []
  return (
    <div id="content-2">
      <div id={divId}>
        <h3 className="soundSource">{srcName}</h3>
        <ul>
        {results.items.map(result => {
          return (
          <li>
            <span onClick={() => playTrack(result, 'YouTube')}>{result.snippet.title}</span>
            <br />
            <img className="artwork" src={result.snippet.thumbnails.medium.url} alt="boohoo"/>
          </li>
        )
        })}
        </ul>
      </div>
    </div>
  )
}

export default SongList2
