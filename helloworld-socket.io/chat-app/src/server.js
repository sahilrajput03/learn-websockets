const {faker} = require('@faker-js/faker')
const express = require('express')

const app = express()
const server = require('http').createServer(app)
// USE BELOW LINE INSTEAD IF YOU DO NOT USE EXPRESS AT ALL
// const server = require('http').createServer()

//? SOCKET.IO CHEATSHEET
//? YAHHH: https://socket.io/docs/v3/emit-cheatsheet/

const IS_HEROKU = !!process.env.IS_HEROKU
console.log({IS_HEROKU})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

// @ts-ignore
const {Server} = require('socket.io')
const io = new Server(server, {
	cors: {origin: '*'}, // allowing cors requests from anywhere.
})

// BELOW CODE ALSO WORKS
// const io = require('socket.io')(server, {
// 	cors: {origin: '*'}, // allowing cors requests from anywhere.
// })

const currentConnections = {}

io.on('connection', (socket) => {
	const clientId = socket.id
	const clientName = faker.name.firstName()
	currentConnections[clientId] = clientName // maintaing cache

	socket.on('disconnect', function () {
		delete currentConnections[clientId]
		const payload = {clientId, clientName, currentConnections}
		io.emit('exit', payload)
		// console.log('exited:: ', clientName)
	})

	console.log(`${clientName} just connected with id ` + clientId)

	// Get currently connected clientIds
	let clientMAP = io.sockets.adapter.rooms
	let clientIds = Array.from(clientMAP.keys()) // MAP to array conversion
	console.log({clientIds})

	// On successful connection we send 'join' event to the client
	const payload = {clientName, clientId, currentConnections}
	// io.to(clientId).emit('join', payload) // io.to method is to send to a particular client and in this case we send to the current client.
	io.emit('join', payload) // io.emit is to send to all clients.

	// listening on `message` event
	socket.on('message', (message) => {
		// ---REMOVING BELOW CODE IN FAVOR OF USING REALISTIC NAME---
		// Using name as clientId
		// const data = `${clientId.substr(0, 2)} said: ${message}` // we can pass objects as well.

		// we can pass objects as well.
		console.log('SERVER-LOG--', `${clientName} said: ${message}`)

		// Send to all
		const payload = {clientId, clientName, message}
		io.emit('message', payload)

		// ----REMOVING THIS IN FAVOR OF SENDING MESSAGE TO ALL.
		// Send to all except current person i.e., 'id = clientId'
		// socket.broadcast.emit('message', data)
	})

	/**
	 * To all clients in the current namespace except the sender
	 */
	socket.on('typing', (TIME_GAP) => {
		// Increasing TIME_GAP by 500ms to keep the flow of showing message in frontend undisturbed bcoz of few milliseconds delay between the time set in TIME_GAP.
		socket.broadcast.emit('typing', {clientName, clientId, TIME_GAP})
	})
})

const PORT = process.env.PORT
server.listen(PORT, () => {
	console.log(`server started listening on port ${PORT}`)
})
