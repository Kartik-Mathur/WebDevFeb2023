const path = require('path');
const PORT = 4444;
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(express.static(path.join(__dirname,'public')));

io.on('connection', (socket) => {
    socket.emit('loggedIn',"loggedIn");
    socket.on('sendmessage',(msg)=>{
        console.log(msg);
        // socket.emit('msgrecieved',Z"Success");
        io.emit('reply',{
            msg,
            senderId: socket.id
        })
    })
});

server.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
});