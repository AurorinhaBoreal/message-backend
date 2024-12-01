
const express = require('express');
const ejs = require('ejs');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const { addMessage } = require('./utils/addMessage');
const { saveMessage } = require('./utils/saveMessage');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'public'));
app.engine('html', ejs.renderFile);

app.use('/', (req, res)=>{
    res.render('index.html');
});

let messages = [];

io.on('connection', socket=>{
    console.log('Novo usuário conectado! ID: ' + socket.id)

    addMessage(socket, messages)

    saveMessage(socket, messages)
});

server.listen(3000, ()=>{
    console.log('Servidor do web chat rodando em -> http://localhost:3000');
});