const {faker} = require('@faker-js/faker')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
// USE BELOW LINE INSTEAD IF YOU DO NOT USE EXPRESS AT ALL
// const server = require('http').createServer()

console.log('HEROKU:', process.env.HEROKU)

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

io.on('connection', (socket) => {
	const clientId = socket.id
	const name = faker.name.firstName()

	console.log(`${name} just connected with id ` + clientId)

	// On successful connection we send 'name' event to the client
	io.to(clientId).emit('name', name)

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
