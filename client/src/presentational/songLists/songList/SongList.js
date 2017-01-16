import React from 'react'

const SongList = ({playTrack, source: {srcName, results}}) => {
  return (
    <div id="content-1">
      <h3 className="soundSource">{srcName}</h3>
      <ul>
        {results.map(result => {
          return (
          <li>
            <span onClick={() => playTrack(result)}>{result.title}</span>
            <br />
            <img className="artwork" src={result.artwork_url} alt="boohoo"/>
          </li>
        )
        })}
      </ul>
    </div>
  )
}

export default SongList
