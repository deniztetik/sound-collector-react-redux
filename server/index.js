const express    = require('express')
    , app        = express()

/// looks for 'index.html' in '/../build' by default ///
app.use(express.static(__dirname + '/../build'))


app.listen(3000)

console.log('Sound Collector is now listening on port 3000')

module.exports = app