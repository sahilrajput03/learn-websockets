// SERVER
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const app = express()
const server = http.createServer(app)
// Namespace = /
const io = socketIo(server)

// Namespace = /nm1
const ns1 = io.of('/ns1')

ns1.on('connection', (socket) => console.log('user connected to ns1 namespace?', socket.nsp.name))
io.on('connection', (socket) => console.log('user connected to / namespace?', socket.nsp.name))

server.listen(3000, () => console.log('Server started on port 3000'))
