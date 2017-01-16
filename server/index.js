const express    = require('express')
    , app        = express()
    , request    = require('request-promise')
    , SC         = require('node-soundcloud')
    , config     = require('./config')
    , bodyParser = require('body-parser')



SC.init({
  id: config.SOUND_CLOUD_CLIENT_ID
})

// looks for 'index.html' in '/../build' by default ///
app.use(express.static(__dirname + '/../build'))

// to make parsing requests easier ///
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// query all sound APIs based on keyword
app.get('/api/v1/sounds', (req, res) => {
  // res.end({hello: "goodbye"})
  const query = req.query.query
  const soundCloudRequest = new Promise((resolve, reject) => {
      SC.get('/tracks', {
        q: query
      }, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  const youTubeRequest = request({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    qs: {
      part: "snippet",
      q: query,
      key: config.YOUTUBE_API_KEY,
      maxResults: "10",
      json: true
    }
  })
  const spotifyRequest = request({
    method: 'GET',
    url: 'https://api.spotify.com/v1/search',
    qs: {
      q: query,
      type: "track",
      limit: "10",
      json: true
    }
  })
  Promise.all([soundCloudRequest, youTubeRequest, spotifyRequest])
    .then(([soundCloud, youTube, spotify]) => res.end(JSON.stringify({
      SoundCloud: soundCloud,
      YouTube: youTube,
      Spotify: spotify
    })))
})


app.listen(3001)

console.log('Sound Collector is now listening on port 3000')

module.exports = app