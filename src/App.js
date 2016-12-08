import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Player from './presentational/player/Player'
import Search from './presentational/search/Search'
import SongList from './presentational/songList/SongList'

class App extends Component {
  constructor() {
    super()
    this.setState({
      currentSound: {},
      searchResults: {}
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Player currentSound={this.state.currentSound}/>
        <Search />
        <SongList />
      </div>
    )
  }
}

export default App
