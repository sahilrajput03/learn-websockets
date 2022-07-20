const http = require('http').createServer()
const {faker} = require('@faker-js/faker')

// @ts-ignore
const io = require('socket.io')(http, {
	cors: {origin: '*'}, // allowing cors requests from anywhere.
})

io.on('connection', (socket) => {
	const clientId = socket.id
	const name = faker.name.firstName()

	console.log(`${name} just connected` + clientId)

	// On successful connection we send 'name' event to the client
	io.to(clientId).emit('name', name)

	// listening on `message` event
	socket.on('message', (message) => {
		console.log(name, ':', message)

		// ---REMOVING BELOW CODE IN FAVOR OF USING REALISTIC NAME---
		// BROADCAST 'MESSAGE' EVENT TO ALL CLIENTS
		// let data = `${clientId.substr(0, 2)} said: ${message}` // we can pass objects as well.

		// BROADCAST 'MESSAGE' EVENT TO ALL CLIENTS (Using *REALISTIC NAMES* instead of ids)
		let data = `${name} said: ${message}` // we can pass objects as well.
		io.emit('message', data)
	})
})

const PORT = process.env.PORT || 8081
http.listen(PORT, () => {
	console.log(`server started listening on port ${PORT}`)
})
