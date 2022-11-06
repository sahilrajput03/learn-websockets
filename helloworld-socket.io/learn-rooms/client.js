// CLIENT
let io = require('socket.io-client')

const socket = io.connect('http://localhost:3000') // namespace /
// const ns1 = io.connect('http://localhost:3000/ns1') // namespace /ns1

socket.on('joinedRoom', (clientId) => {
	console.log('<-joinedRoom event triggered', clientId)
})

setTimeout(() => {
	socket.emit('memberConnected')
	console.log('-> executed `memberConnected`')
}, 3000)
