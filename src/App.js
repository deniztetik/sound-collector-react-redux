import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Player from './presentational/player/Player'
import Search from './presentational/search/Search'
import SongLists from './presentational/songLists/SongLists'
import SC from './config/soundcloud'

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
    this.updateRootLevelState({ searchKeyword: e.target.value })
    this.querySoundCloud(e.target.value)
    this.queryYouTube(e.target.value)
  }

  updateRootLevelState(newProp) {
    const nextState = Object.assign({}, this.state, newProp)
    this.setState(nextState)
  }

  updateSourceResults(sounds, source) {
    if (source === 'SoundCloud') {
      const searchResults = this.state.searchResults
      searchResults.sources[0].results = sounds;
      this.setState({
        searchResults,
      })
    }
  }

  querySoundCloud(query) {
    const that = this
    SC.get('/tracks', {
      q: query
    }).then(function(tracks) {
      that.updateSourceResults(tracks, 'SoundCloud')
    });
  }

  // queryYouTube(query) {
  //
  // }

  playTrack(track) {
    let trackUrl = track.stream_url
    trackUrl = "https://w.soundcloud.com/player/?url=" + trackUrl
    trackUrl = trackUrl.split("/").slice(0,9).join("/")
    let currentSound = this.state.currentSound
    currentSound = trackUrl
    this.setState({
      currentSound,
    })
  }

  render() {
    const currentSound = this.state ? this.state.currentSound : {}
    const searchResults = this.state ? this.state.searchResults : {}
    const searchKeyword = this.state ? this.state.searchKeyword : {}
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
