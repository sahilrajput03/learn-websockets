// CLIENT
let io = require('socket.io-client')

const socket = io.connect('http://localhost:3000') // namespace /
const ns1 = io.connect('http://localhost:3000/ns1') // namespace /ns1
