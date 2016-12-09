import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Player from './presentational/player/Player'
import Search from './presentational/search/Search'
import SongLists from './presentational/songLists/SongLists'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchKeyword: '',
      currentSound: {},
      searchResults: { sources: [
                       {
                         srcName: "SoundCloud",
                         divId: "content-1"
                       },
                       {
                         srcName: "YouTube",
                         divId: {
                           name: "content-2",
                           divId: "content-2-1"
                         }
                       },
                       {
                         srcName: "Spotify",
                         divId: {
                           name:"content-2",
                           divId: "content-2-2"
                         }
                       }
                     ]
                     }
    }
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
        <Search searchKeyword={searchKeyword}/>
        <SongLists searchResults={searchResults}/>
      </div>
    )
  }
}

export default App
