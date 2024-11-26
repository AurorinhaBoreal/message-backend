
function addMessage (socket, messages) {
    socket.emit('previousMessages', messages)
}

module.exports = {
    addMessage: addMessage
}