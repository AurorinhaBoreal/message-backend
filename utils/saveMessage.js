
function saveMessage (socket, messages) {
    socket.on('sendMessage', data => {
        messages.push(data)

        socket.broadcast.emit('receivedMessage', data)
    })
}

module.exports = {
    saveMessage: saveMessage
}