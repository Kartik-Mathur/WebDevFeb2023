const path = require('path');
const PORT = 4444;
const express = require('express');
const { SSL_OP_NO_TICKET } = require('constants');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let userMap = {};
app.use(express.static(path.join(__dirname,'public')));

io.on('connection', (socket) => {
    socket.emit('loggedIn',"loggedIn");
    socket.on('sendmessage',(msg)=>{
        console.log(msg);
        // socket.emit('msgrecieved',"Success");
        io.emit('reply',{
            msg,
            senderId: userMap[socket.id]
        })
    })

    socket.on('signup',(msg)=>{
        userMap[socket.id] = msg.username;
        console.log(userMap);
        socket.emit('signupSuccess',"OK");
    })
});

server.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
});