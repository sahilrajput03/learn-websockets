/* eslint-disable no-undef */
const serverUrl = 'http://192.168.18.3:3000'
const socket = io(serverUrl)
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?')
// appendMessage('You joined')
appendMessage('Hello, ' + name + '. Welcome to chat application.')
socket.emit('new-user', name)

socket.on('chat-message', (data) => {
	appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', (name) => {
	appendMessage(`${name} connected`)
})

socket.on('user-disconnected', (name) => {
	appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const message = messageInput.value
	appendMessage(`You: ${message}`)
	socket.emit('send-chat-message', message)
	messageInput.value = ''
})

function appendMessage(message) {
	const messageElement = document.createElement('div')
	messageElement.innerText = message
	messageContainer.append(messageElement)
}
