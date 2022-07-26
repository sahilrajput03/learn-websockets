const {faker} = require('@faker-js/faker')
const express = require('express')
const Mustache = require('mustache')
const fs = require('fs')

const app = express()
const server = require('http').createServer(app)
// USE BELOW LINE INSTEAD IF YOU DO NOT USE EXPRESS AT ALL
// const server = require('http').createServer()

const IS_HEROKU = !!process.env.IS_HEROKU
console.log({IS_HEROKU})

app.get('/', (req, res) => {
	// Simple way
	res.sendFile(__dirname + '/index.html')

	// Render the mustache html template and pass some data dynamically
	// const template = fs.readFileSync('./index.html', 'utf8')
	// const rendered = Mustache.render(template, {IS_HEROKU})
	// console.log({rendered})
	// res.send(rendered)
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
	const name = faker.name.firstName()
	currentConnections[clientId] = name // maintaing cache

	socket.on('disconnect', function () {
		delete currentConnections[clientId]
	})

	console.log(`${name} just connected with id ` + clientId)

	// Get currently connected clientIds
	let clientMAP = io.sockets.adapter.rooms
	let clientIds = Array.from(clientMAP.keys()) // MAP to array conversion
	console.log({clientIds})

	// On successful connection we send 'name' event to the client
	const payload = {name, clientId, CLIENTS: currentConnections}
	// io.to(clientId).emit('name', payload) // io.to method is to send to a particular client and in this case we send to the current client.
	io.emit('name', payload) // io.emit is to send to all clients.

	// listening on `message` event
	socket.on('message', (message) => {
		// ---REMOVING BELOW CODE IN FAVOR OF USING REALISTIC NAME---
		// Using name as clientId
		// const data = `${clientId.substr(0, 2)} said: ${message}` // we can pass objects as well.

		// we can pass objects as well.
		console.log('SERVER-LOG--', `${name} said: ${message}`)

		// Send to all
		const payload = {clientId, name, message}
		io.emit('message', payload)

		// ----REMOVING THIS IN FAVOR OF SENDING MESSAGE TO ALL.
		// Send to all except current person i.e., 'id = clientId'
		// socket.broadcast.emit('message', data)
	})
})

const PORT = process.env.PORT || 8081
server.listen(PORT, () => {
	console.log(`server started listening on port ${PORT}`)
})
