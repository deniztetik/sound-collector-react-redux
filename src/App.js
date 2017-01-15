import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Player from './presentational/player/Player'
import Search from './presentational/search/Search'
import SongLists from './presentational/songLists/SongLists'

import request from 'request-promise'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchKeyword: '',
      currentSound: {},
      searchResults: { sources: [
                       {
                         srcName: "SoundCloud",
                         divId: "content-1",
                         results: []
                       },
                       {
                         srcName: "YouTube",
                         divId: {
                           name: "content-2",
                           divId: "content-2-1"
                         },
                         results: []
                       },
                       {
                         srcName: "Spotify",
                         divId: {
                           name:"content-2",
                           divId: "content-2-2"
                         },
                         results: []
                       }
                     ]
                  }
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.playTrack = this.playTrack.bind(this)
  }

  handleSearchChange(e) {
    const nextState = Object.assign({}, this.state, {searchKeyword: e.target.value})
    this.setState(nextState)
    this.querySources(e.target.value)
      .then(result => {
        this.updateSourceResults(result)
      })
  }

  querySources(query) {
    return request({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/sounds',
      qs: {query: query},
      json: true
    })
  }

  updateSourceResults({SoundCloud, YouTube, Spotify}) {
    const searchResults = this.state.searchResults
    searchResults.sources[0].results = SoundCloud
    searchResults.sources[1].results = JSON.parse(YouTube)
    searchResults.sources[2].results = JSON.parse(Spotify)
    this.setState({
      searchResults,
    })
  }

  playTrack(track, source) {
    if (source === 'YouTube') {
      // var videoId = data.track.id.videoId;
      // var trackUrl = "https://www.youtube.com/embed/" + videoId + "/?autoplay=1";
      // $scope.currentlyPlaying = $sce.trustAsResourceUrl(trackUrl);
      const videoId = track.id.videoId
      const trackUrl = "https://www.youtube.com/embed/" + videoId + "/?autoplay=1"
      let currentSound = this.state.currentSound
      currentSound = trackUrl
      this.setState({
        currentSound,
      })
    } else {
      let trackUrl = track.stream_url
      trackUrl = "https://w.soundcloud.com/player/?url=" + trackUrl
      trackUrl = trackUrl.split("/").slice(0,9).join("/") + '?auto_play=true'
      let currentSound = this.state.currentSound
      currentSound = trackUrl
      this.setState({
        currentSound,
      })
    }
  }

  render() {
    const currentSound = this.state ? this.state.currentSound : {}
    const searchResults = this.state ? this.state.searchResults : {}
    const searchKeyword = this.state ? this.state.searchKeyword : {}
    return (
      <div className="App">
        <div className="App-header">
          <h2>Sound Collector</h2>
        </div>
        <Player currentSound={currentSound}/>
        <Search searchKeyword={searchKeyword}
                handleChange={this.handleSearchChange}
        />
        <SongLists searchResults={searchResults}
                   playTrack={this.playTrack}
        />
      </div>
    )
  }
}

export default App
