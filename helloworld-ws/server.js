const ws = require('ws')
const port = parseInt(process.env.PORT) || 8081

const server = new ws.Server({port})

server.on('connection', (socket) => {
	// Whenever our server receives a 'messsage' then this callback will execute:
	socket.on('message', (message) => {
		socket.send('Thats a brilliant idea ' + message + '.')
	})
})
