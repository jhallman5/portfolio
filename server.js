const express = require('express')
const path = require('path')

const server = express()
const PORT = process.env.PORT || 3000

server.use(express.static('public'))

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})
server.listen(PORT, () => console.log('Server is running on port ' + PORT))
