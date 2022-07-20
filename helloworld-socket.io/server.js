const http = require('http').createServer()
const {faker} = require('@faker-js/faker')

// @ts-ignore
const io = require('socket.io')(http, {
	cors: {origin: '*'}, // allowing cors requests from anywhere.
})

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
http.listen(PORT, () => {
	console.log(`server started listening on port ${PORT}`)
})
