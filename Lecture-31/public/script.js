const socket = io();
const btn = document.querySelector('#btn');
const msg = document.querySelector('#msg');
const msgList = document.querySelector('.msgList');

btn.addEventListener('click',(ev)=>{
    socket.emit('sendmessage',{
        msg:msg.value,
        id:socket.id
    });
})

socket.on('loggedIn',(msg)=>{
    console.log(msg);
})

socket.on('msgrecieved',(msg)=>{
    console.log(msg);
})

socket.on('reply',(msg)=>{
    console.log(msg);

    let div = document.createElement('div');
    div.innerText = `${msg.senderId} : ${msg.msg.msg}`
    msgList.appendChild(div);
})

// setTimeout(()=>{
//     console.log(socket.id);
// },1000);

// socket.on('Hello',(msg)=>{
//     console.log(msg);
//     socket.emit('Hello',"Haan haan batao baat");
// })

// socket.on("Hello1",(msg)=>{
//     console.log(msg);
// })