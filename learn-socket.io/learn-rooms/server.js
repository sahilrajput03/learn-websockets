// SERVER
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const app = express()
const server = http.createServer(app)
// Namespace = /
const io = socketIo(server)

// Namespace = /nm1
// const ns1 = io.of('/ns1')

// ns1.on('connection', (socket) => console.log('user connected to ns1 namespace?', socket.nsp.name))
io.on('connection', (socket) => {

	socket.on('join', () => {
		socket.join('room1') // make member to join room1
	})

	// This is to notify clients about event of room joining when client calls ```socket.emit('join')```
	socket.on('memberConnected', () => {
		// socket.to('room1').emit('joinedRoom', socket.id) // Send to all clients except the sender
		// Using below for testing only (For production you don't want to send to (all clients + yoursel), SO YOU MUST USE ABOVE INSTEAD TO SEND TO ALL CLIENTS OF ROOM1 EXCEPT SELF).
		io.in('room1').emit('joinedRoom', socket.id) // Send to all client
	})
})

server.listen(3000, () => console.log('Server started on port 3000'))
