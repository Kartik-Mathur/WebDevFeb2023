const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
let cnt = 0;
app.get('/',(req,res)=>{
    if(cnt == 0) {
        res.setHeader('Set-Cookie',"loggedIn=true");
        cnt++;
    }
    // console.log(res.get('Set-Cookie'));
    // let cookie = res.get('Set-Cookie');
    // console.log(cookie.split('=').pop());
    let loggedIn = res.get('Set-Cookie').split('=').pop();
    if(loggedIn == 'true'){
        res.sendFile(__dirname+'/loggedIn.html');
    }
    else res.sendFile(__dirname+'/notloggedIn.html');
})

app.get('/check',(req,res)=>{
    let loggedIn = req.get('Set-Cookie').split('=').pop();
    if(loggedIn == 'true'){
        res.sendFile(__dirname+'/loggedIn.html');
    }
    else res.sendFile(__dirname+'/notloggedIn.html');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});